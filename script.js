class Clock {
  constructor () {}
    render() {
      setInterval(function () {
        let now = new Date();
        let clock = document.getElementById("clock");
        if (clock.classList.contains('hidden')) {
          clock.innerHTML = now.toLocaleTimeString().slice(0,-3);
        } else {
          clock.innerHTML = now.toLocaleTimeString();
        }
        },100);
        document.querySelector('div').addEventListener('click', (event) => {
          event.target.classList.toggle('hidden');
        });
    } 
}

let clock = new Clock();
clock.render();

//   setInterval(function() { 
  //   let date = new Date(),
  //   hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
  //   minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
  //   seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
  //   document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;
  //   }, 100);
  //   document.querySelector('div').addEventListener('click', (event) => {
  //     event.target.classList.toggle('hidden');
  //   });
  // }
  // shortFormart() {

  // }
