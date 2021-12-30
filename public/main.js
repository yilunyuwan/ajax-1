getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'style.css')
    request.onload = () => {
        const style = document.createElement('style')
        style.innerHTML = request.response
        document.head.appendChild(style)

    }

    request.onerror = () => {
        console.log('FAIL TO GET CSS')
    }
    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '2.js')
    request.onload = () => {
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }

    request.onerror = () => {
        console.log('FAIL TO GET JS')
    }

    request.send()

}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '3.html')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const div = document.createElement('div')
                div.innerHTML = request.response
                document.body.appendChild(div)
            }
            else {
                alert('html 加载失败')
            }
        }
    }
    // request.onload = () => {
    //     const div = document.createElement('div')
    //     div.innerHTML = request.response
    //     document.body.appendChild(div)
    // }
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status === 200) {
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            }
        }
    }
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status === 200) {
                const object = JSON.parse(request.response)
                username.innerHTML = 'by  ' + object.name
            }
        }
    }
    request.send()
}

let n = 2
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `page${n}.json`)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status === 200) {
                const array = JSON.parse(request.response)
                array.map((item) => {
                    const li = document.createElement('li')
                    li.textContent = item.id
                    pageData.appendChild(li)
                })
                n += 1
            }
        }
    }
    request.send()
}