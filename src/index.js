import './styles.css';
import { Promise } from 'core-js';
//  1 task
const start = document.querySelector('[data-action="start"]');
const stop = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const random = function(colors) {
    return Math.round(Math.random() * (colors - 0));
}

let randomColorStart = null;
start.addEventListener('click', () => {
    start.setAttribute("disabled", "disabled");
    randomColorStart = setInterval(() => {
        body.style.backgroundColor = `${colors[random(colors.length)]}`
    }, 1000)
});
stop.addEventListener('click', () => {
    start.removeAttribute("disabled");
    clearInterval(randomColorStart);
})

// 2 task

const daysRefs = document.querySelector('[data-value="days"]');
const hoursRefs = document.querySelector('[data-value="hours"]');
const minsRefs = document.querySelector('[data-value="mins"]');
const secondsRefs = document.querySelector('[data-value="secs"]');

// const countdownTimer = new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Sep 17, 2020'),
// });
const timer = function() {
    setInterval(() => {
        const targetDate = new Date('Sep 17, 2020');
        const dateNow = Date.now();
        const time = targetDate.getTime() - dateNow;
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);
        daysRefs.textContent = days;
        hoursRefs.textContent = hours;
        minsRefs.textContent = mins;
        secondsRefs.textContent = secs;
    }, 1000);
}
timer();

// 3 task


// const delay = ms => {
//     const promise = new Promise((resolve, reject) => {

//         setTimeout(() => {
//             resolve(ms);
//         }, ms);
//     });
//     return promise;
// };

// const logger = time => console.log(`Resolved after ${time}ms`);

// // Вызовы функции для проверки
// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms

// --------------------------------------------------------------------------------

// const users = [
//     { name: 'Mango', active: true },
//     { name: 'Poly', active: false },
//     { name: 'Ajax', active: true },
//     { name: 'Lux', active: false },
// ];

// const toggleUserState = (allUsers, userName, callback) => {
//     const promice = new Promise((resolve, reject) => {
//         const updatedUsers = allUsers.map(user =>
//             user.name === userName ? {...user, active: !user.active } : user,
//         );
//         resolve(updatedUsers);
//     });
//     return promice;
// };

// const logger = updatedUsers => console.table(updatedUsers);

// /*
//  * Сейчас работает так
//  */
// // toggleUserState(users, 'Mango', logger);
// // toggleUserState(users, 'Lux', logger);

// /*
//  * Должно работать так
//  */
// toggleUserState(users, 'Mango').then(logger);
// toggleUserState(users, 'Lux').then(logger);

// --------------------------------------------------------------------------------


const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction, onSuccess, onError) => {
    const delay = randomIntegerFromInterval(200, 500);
    const promice = new Promise((resolve, reject) => {
        setTimeout(() => {
            const canProcess = Math.random() > 0.3;

            if (canProcess) {
                const [] = transaction
                console.log(transaction)
                resolve(transaction)
            } else {
                // const errror = onError(transaction.id);
                reject(transaction.id)
            }
        }, delay);
    })
    console.log(promice)
    return promice;

};

const logSuccess = (obj) => {
    console.log(`Transaction ${obj.id} processed in ${obj.amount}ms`);
};

const logError = id => {
    console.warn(`Error processing transaction ${id}. Please try again later.`);
};

/*
 * Работает так
 */
// makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
/*
 * Должно работать так
 */
makeTransaction({ id: 70, amount: 150 })
    .then(logSuccess)
    .catch(logError);

makeTransaction({ id: 71, amount: 230 })
    .then(logSuccess)
    .catch(logError);

makeTransaction({ id: 72, amount: 75 })
    .then(logSuccess)
    .catch(logError);

makeTransaction({ id: 73, amount: 100 })
    .then(logSuccess)
    .catch(logError);