import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-lewd',
  templateUrl: './lewd.component.html',
  styleUrls: ['./lewd.component.css']
})
export class LewdComponent implements OnInit {
  loveList: Observable<any[]>;
  likeList: Observable<any[]>;
  maybeList: Observable<any[]>;
  limitList: Observable<any[]>;
  toyList: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.loveList = firestore.collection('loves').valueChanges();
    this.likeList = firestore.collection('likes').valueChanges();
    this.maybeList = firestore.collection('maybes').valueChanges();
    this.limitList = firestore.collection('limits').valueChanges();
    this.toyList = firestore.collection('toys').valueChanges();
  }

  ngOnInit(): void {
  }

}
