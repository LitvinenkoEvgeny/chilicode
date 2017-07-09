export function isChildren(target, parent){
  let parents = getParents(target);
  let isChildren = false;


  parents.forEach(p => {
    if(p === parent){
      isChildren = true;
    }
  });

  return isChildren;

}

export function getParents(el, parentSelector /* optional */) {
  // If no parentSelector defined will bubble up all the way to *document*
  if (parentSelector === undefined) {
    parentSelector = document;
  }

  let parents = [];
  let p = el.parentNode;

  while (p !== parentSelector) {
    let o = p;
    parents.push(o);
    p = o.parentNode;
  }
  parents.push(parentSelector); // Push that parentSelector you wanted to stop at

  return parents;
}
