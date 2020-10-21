import { Injectable } from '@angular/core';
import {Contact} from './contacts.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contacts: Contact[] = [
    {
      id: 'c1',
      name: 'Inori Minase',
      imageUrl: 'https://vignette.wikia.nocookie.net/5toubun-no-hanayome/images/6/60/Inori_Minase.png/revision/latest?cb=20190428172202',
      phoneNumber: ['+1-202-555-0121', '+1-202-555-0107'],
      email: ['minase.inori@umn.ac.id', 'minase.inori@gmail.com']
    },
    {
      id: 'c2',
      name: 'Yuichi Nakamura',
      imageUrl: 'https://cdn.myanimelist.net/images/voiceactors/2/42161.jpg',
      phoneNumber: ['+1-202-555-0117', '+1-202-555-0185'],
      email: ['nakamura.yuichi@umn.ac.id', 'nakamura.yu1@yahoo.com']
    },
    {
      id: 'c3',
      name: 'Tomokazu Sugita',
      imageUrl: 'https://vignette.wikia.nocookie.net/ultra/images/5/5e/Tomokazu_Sugita.jpg/revision/latest/top-crop/width/360/height/450?cb=20150610083244',
      phoneNumber: ['+1-202-555-0129', '+1-202-555-0169'],
      email: ['sugita.tomokazu@umn.ac.id', 'sugitomo@yahoo.com']
    },
    {
      id: 'c4',
      name: 'Kenji Akabane',
      imageUrl: 'https://vignette.wikia.nocookie.net/cardfight/images/e/ea/KenjiAkabaneVA.jpg/revision/latest/scale-to-width-down/340?cb=20180720065122',
      phoneNumber: ['+1-202-555-0144', '+1-202-555-0169'],
      email: ['akabane.kenji@umn.ac.id', 'redfeather@gmail.com']
    },
    {
      id: 'c5',
      name: 'Hikaru Midorikawa',
      imageUrl: 'https://cdn.myanimelist.net/images/voiceactors/2/56626.jpg',
      phoneNumber: ['202-555-0134', '202-555-0172'],
      email: ['midorikawa.hikaru@umn.ac.id', 'greenlight_river@yahoo.com']
    }

  ];
  constructor() { }

  addContact(contact: Contact){
    const idSize: number = this.contacts.length + 1;

    const newItem: Contact = {
      id: contact.id + idSize,
      name: contact.name,
      imageUrl: contact.imageUrl,
      phoneNumber: contact.phoneNumber,
      email: contact.email
    };
    this.contacts.push(newItem);
    console.log(newItem);
  }

  editContact(contact: any, selectedIndex: any){
    this.contacts[selectedIndex] = contact;
    console.log(contact);
  }

  getAllContacts(){
    return [...this.contacts];
  }

  getContact(contactId: string) {
    return {...this.contacts.find(contact => {
        return contact.id === contactId;
      })};
  }

  deleteContact(contactId: string) {
    this.contacts = this.contacts.filter(contact => {
      return contact.id !== contactId;
    });
  }
}
