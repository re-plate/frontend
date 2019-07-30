import  { useEffect, useState } from "react";

const ShowList = () => {

const [isRendered, setIsRendered] = useState(false);
console.log(isRendered)
const requestButton = document.querySelector('.requestButton')
console.log(requestButton)

useEffect(() => {

    if (isRendered === true) {
        document.body.classList.add('hidden');
    }
    else {
        document.body.classList.remove('hidden');
    }
}, [isRendered]);

return [isRendered,setIsRendered];

}

export default ShowList;