import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Contact} from '../../contacts.model';
import {LoadingController, ModalController, ToastController} from '@ionic/angular';
import {ContactsService} from '../../contacts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})

export class EditComponent implements OnInit {
  @Input() selectedContact: string;
  @Input() selectedIndex: any;
  editForm: FormGroup;
  contactId: any;
  contactData: Contact;
  private idx: number;

  get name() {
    return this.editForm.get('name');
  }

  get imageUrl() {
    return this.editForm.get('imageUrl');
  }

  get email() {
    return this.editForm.get('email');
  }

  get phoneNumber() {
    return this.editForm.get('phoneNumber');
  }

  constructor(
      private modalCtrl: ModalController,
      private loadingCtrl: LoadingController,
      private toastController: ToastController,
      private contactsService: ContactsService,
      private router: Router,
      private formBuilder: FormBuilder
  ) {

    this.editForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    // this.productID = this.actRoute.snapshot.params['id'];
    this.loadProductDetails(this.selectedContact);
  }

  loadProductDetails(contactId){
    this.contactData = this.contactsService.getContact(contactId);
    this.editForm.controls.name.setValue(this.contactData.name);
    this.editForm.controls.imageUrl.setValue(this.contactData.imageUrl);
    this.editForm.controls.email.setValue(this.contactData.email);
    this.editForm.controls.phoneNumber.setValue(this.contactData.phoneNumber);
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Saving contact...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed');
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Contact Edited.',
      color: 'success',
      duration: 2000
    });
    await toast.present();
  }

  Cancel(){
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onSubmit(values) {
    this.presentLoading().then(() => {
      console.log(this.selectedContact);
      console.log(this.selectedIndex);
      const name = values.name;
      const imageUrl = values.imageUrl;
      const email = values.email;
      const pNumber = values.phoneNumber;
      let splittedEmail;
      let splittedNumber;

      if (typeof email === 'string'){
        splittedEmail = email.split(',');
        if (typeof pNumber === 'string'){
          splittedNumber = pNumber.split(',');
          splittedEmail = this.filteredData(splittedEmail);
          splittedNumber = this.filteredData(splittedNumber);
          this.sendEditedData(name, imageUrl, splittedEmail, splittedNumber);
        }
        else {
          splittedEmail = this.filteredData(splittedEmail);
          this.sendEditedData(name, imageUrl, splittedEmail, pNumber);
        }
      } else if (typeof pNumber === 'string'){
        splittedNumber = pNumber.split(',');
        splittedNumber = this.filteredData(splittedNumber);
        this.sendEditedData(name, imageUrl, email, splittedNumber);
      }
      else {
        this.sendEditedData(name, imageUrl, email, pNumber);
      }

      this.modalCtrl.dismiss( 'success', 'confirm');
      this.presentToast();
    });
  }

  filteredData(splittedData){
    const tempArr = [];
    for (this.idx = 0; this.idx < splittedData.length; this.idx++) {
      const now = splittedData[this.idx].trim();
      if (now !== undefined && now !== '') {
        tempArr.push(splittedData[this.idx]);
      }
    }
    return tempArr;
  }

  sendEditedData(name: string, imageUrl: string, email: any, phoneNumber: any){
    const editedContact: Contact = {
      id: this.selectedContact,
      name,
      imageUrl,
      email,
      phoneNumber
    };
    this.contactsService.editContact(editedContact, this.selectedIndex);
  }
}
