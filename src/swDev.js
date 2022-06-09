import React from 'react'
import { responsesAreSame } from 'workbox-broadcast-update';

function swDev() {




 function determineAppserverKey(){
    const vapidPublicKey="BIDGQN1fED6ntBwwjPPzBMLSJ26URzXlpyufRBJBoxr1cYEEKuKHc9JRQD1OskXlYkOCgc2qJgbnmQyOKBos7sw";
    return urlBase64ToUint8Array(vapidPublicKey);
 }
 function urlBase64ToUint8Array(base64String){
    const padding='='.repeat((4-base64String.length%4)%4);
    const base64=(base64String+padding).replace(/\-/g,'+').replace(/_/g,'/');
    const rawData=window.atob(base64);
    const outputArray=new Uint8Array(rawData.length);

    for(let i=0;i<rawData.length;++i){
       outputArray[i]=rawData.charCodeAt(i)
    }
    return outputArray;
   }

   let swUrl=`${process.env.PUBLIC_URL}/sw.js`
   navigator.serviceWorker.register(swUrl).then((response)=>{

      return response.pushManager.getSubscription().then((subscription)=>{

        response.pushManager.subscribe({
           userVisibleOnly:true,
           applicationServerKey:determineAppserverKey()
        })
      })
   })
 
}

export default swDev;