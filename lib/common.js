'use strict';

export const XSI_TYPE = 'xsi:type';
export const XSI_URI = 'http://www.w3.org/2001/XMLSchema-instance';

export const DEFAULT_NS_MAP = {
  'xsi': XSI_URI
};


function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lower(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

function hasLowerCaseAlias(pkg) {
  return pkg.xml && pkg.xml.tagAlias === 'lowerCase';
}

function serializeFormat(element) {
  return element.xml && element.xml.serialize;
}


export function aliasToName(alias, pkg) {
  if (hasLowerCaseAlias(pkg)) {
    return capitalize(alias);
  } else {
    return alias;
  }
}

export function nameToAlias(name, pkg) {
  if (hasLowerCaseAlias(pkg)) {
    return lower(name);
  } else {
    return name;
  }
}

export function serializeAsType(element) {
  return serializeFormat(element) === XSI_TYPE;
}

export function serializeAsProperty(element) {
  return serializeFormat(element) === 'property';
}