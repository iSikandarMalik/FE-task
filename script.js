let x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select")
l = x.length;
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    a = document.createElement("DIV")
    a.setAttribute("class", "select-selected")
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a)
    b = document.createElement("DIV")
    b.setAttribute("class", "select-items select-hide")
    for (j = 1; j < ll; j++) {
        c = document.createElement("DIV")
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            let y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected")
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class")
                    }
                    this.setAttribute("class", "same-as-selected")
                    break;
                }
            }
            h.click()
        })
        b.appendChild(c)
    }
    x[i].appendChild(b)
    a.addEventListener("click", function(e) {
        e.stopPropagation()
        closeAllSelect(this)
        this.nextSibling.classList.toggle("select-hide")
        this.classList.toggle("select-arrow-active")
    })
}
function closeAllSelect(elmnt) {
    let x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items")
    y = document.getElementsByClassName("select-selected")
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active")
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide")
        }
    }
}
document.addEventListener("click", closeAllSelect)

const pages = document.querySelectorAll(".menu-item")

function active_item () {
    pages.forEach((item) => {
        item.classList.remove('isActiveBtn')
    })
    this.classList.add('isActiveBtn')
}

pages.forEach((item) => {
    item.addEventListener('click', active_item)
})

{/** To: toggle sidebar */}
let isSideBarOpen = false

function handleSidebar() {
    if (isSideBarOpen) {
        closeNav()
        isSideBarOpen = false
    } else {
        openNav()
        isSideBarOpen = true
    }
}

const openNav = () => {
    document.getElementById("sidebar").style.transform = 'translateX(0)'
    document.getElementById("sidebar-overlay").style.display = 'block'
}

const closeNav = () => {
    document.getElementById("sidebar").style.transform = "translateX(-100%)"
    document.getElementById("sidebar-overlay").style.display = 'none'
}
