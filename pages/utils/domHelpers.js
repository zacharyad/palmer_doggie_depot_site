function toggleNodeClassName(node, name) {
  if (node.classList.contains(name)) {
    node.classList.remove(name);
    node.style.height = "0px";
  } else {
    node.classList.add(name);
    node.style.height = `${node.childNodes[0].offsetHeight}px`;
  }
}

function parseDomElemToAddToggleClass(e) {
  let node = e.target.parentNode;

  if (node.classList.contains("faq")) {
    node = node.childNodes[1];
    toggleNodeClassName(node, "expanded");
  } else {
    node = node.parentNode.childNodes[1];
    toggleNodeClassName(node, "expanded");
  }
}

function findDomElementToAddEventToToggleExpandClass() {
  return [...document.getElementsByClassName("faq")].map((elem) => {
    console.log(elem);
    elem.addEventListener("click", parseDomElemToAddToggleClass);
    return elem;
  });
}

export default {
  findDomElementToAddEventToToggleExpandClass,
  parseDomElemToAddToggleClass,
};
