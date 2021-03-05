const View = {
  render({ minutes, seconds }) {
    if(!timer)
      return;

    document.getElementById("timer").innerHTML = `
      <span>${ minutes }:${ seconds }</span>
    `
  },
}


export { View }