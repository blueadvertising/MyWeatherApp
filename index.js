const weatherPromise = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=-26.0871908&lon=28.0124675&appid=87a4b4f648814f8709197f45419a77f2')
const weather = await weatherPromise.json()

console.log(weathersj);

const template = document.querySelector('#hourly')
const wrapper = document.createElement('div')

weather.forEach(weather => {
    const clone = template.content.cloneNode(true)
    clone.querySelector('h2').textContent = weather

    wrapper.appendChild(clone)

});
document.querySelector(".hourly").appendChild(wrapper)