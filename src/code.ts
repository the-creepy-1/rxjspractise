import * as Rx from 'rxjs';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/share';
import { Subject } from 'rxjs';
import { AsyncSubject } from "rxjs";
import {merge} from 'rxjs/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/scan';
import {fromEvent} from 'rxjs';
var button = document.querySelector('button');
var obs = fromEvent(button, 'click').scan(count => count + 1, 0).subscribe(count => console.log('pressed' + count + 'times'))
console.log('button is', button);

var subject = new Subject();
subject.next(1);
subject.next(2);
var subscribe1 = subject.subscribe(
    (data: any) => { console.log('current data is '+ data)},
    (error: any) => { console.log('error is', error)},
    () => {console.log('subscriber complete')}
    );
subject.next(3);
subject.next(4);

// var observable = Observable.create((observer: any) => {
//     observer.next('hey guys');
//     observer.next('hello guys');
//     observer.next('kemon acho guys');
//     setInterval(() => {
//         observer.next('time out 10000');
//     }, 100);
// }).share();

// setTimeout(() => {
//     observable.subscribe((x: any) => {
//         console.log(x);
//     })
// }, 10000)
// var subscription = observable.subscribe(
//     (resp: any) => {
//     console.log(resp);
//     },
//     (error: any) => {
//         console.log('error is', error);
//     },
//     () => {
//         console.log('completed');
//     }

// );
// setTimeout(() => {
//     subscription.unsubscribe();
// }, 6000);