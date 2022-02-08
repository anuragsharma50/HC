import React, { useEffect } from 'react'

function Notification() {

    const sendNotification = async () => {
        let sw = await navigator.serviceWorker.ready;
        let push = await sw.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey:
            'BBZY7Q3KEtZArAAWMLi_qzWHbH4vAoqPpIXnRhmlUaw0PVs1Kt_2fgLhuaVI5i8MWASBKx3d6W6UoH2U3qChw9U'
        });
        console.log(JSON.stringify(push));
    }

    useEffect(() => {
        if ('serviceWorker' in navigator) {
            addEventListener('load', async () => {
              let sw = await navigator.serviceWorker.register('../lib/sw');
              console.log(sw);
            });
        }
    }, [])

    // async function subscribe() {
    //     let sw = await navigator.serviceWorker.ready;
    //     let push = await sw.pushManager.subscribe({
    //       userVisibleOnly: true,
    //       applicationServerKey:
    //         'BBZY7Q3KEtZArAAWMLi_qzWHbH4vAoqPpIXnRhmlUaw0PVs1Kt_2fgLhuaVI5i8MWASBKx3d6W6UoH2U3qChw9U'
    //     });
    //     console.log(JSON.stringify(push));
    //   }

    //   if ('serviceWorker' in navigator) {
    //     addEventListener('load', async () => {
    //       let sw = await navigator.serviceWorker.register('./sw.js');
    //       console.log(sw);
    //     });
    // }

    return (
        <div>
            <button onClick={() => sendNotification()}>Send notification</button>
        </div>
    )
}

export default Notification
