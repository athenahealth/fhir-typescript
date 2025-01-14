// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: HumanName

import * as fhir from '../fhir.js';

// @ts-ignore
import { NameUseCodings, NameUseCodingType,} from '../fhirValueSets/NameUseCodings.js';
// @ts-ignore
import { NameUseCodes,  NameUseCodeType } from '../fhirValueSets/NameUseCodes.js';
/**
 * Valid arguments for the HumanName type.
 */
export interface HumanNameArgs extends fhir.FhirElementArgs {
  /**
   * Applications can assume that a name is current unless it explicitly says that it is temporary or old.
   */
  use?: fhir.FhirCode<NameUseCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: HumanName.use
   */
  _use?:fhir.FhirElementArgs;
  /**
   * Can provide both a text representation and parts. Applications updating a name SHALL ensure that when both text and parts are present,  no content is included in the text that isn't found in a part.
   */
  text?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: HumanName.text
   */
  _text?:fhir.FhirElementArgs;
  /**
   * Family Name may be decomposed into specific parts using extensions (de, nl, es related cultures).
   */
  family?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: HumanName.family
   */
  _family?:fhir.FhirElementArgs;
  /**
   * If only initials are recorded, they may be used in place of the full name parts. Initials may be separated into multiple given names but often aren't due to paractical limitations.  This element is not called "first name" since given names do not always come first.
   */
  given?: fhir.FhirString[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: HumanName.given
   */
  _given?:(fhir.FhirElementArgs|null)[];
  /**
   * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.
   */
  prefix?: fhir.FhirString[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: HumanName.prefix
   */
  _prefix?:(fhir.FhirElementArgs|null)[];
  /**
   * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.
   */
  suffix?: fhir.FhirString[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: HumanName.suffix
   */
  _suffix?:(fhir.FhirElementArgs|null)[];
  /**
   * Indicates the period of time when this name was valid for the named person.
   */
  period?: fhir.PeriodArgs|undefined;
}

/**
 * A human's name with the ability to identify parts and usage.
 */
export class HumanName extends fhir.FhirElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'HumanName';
  /**
   * Applications can assume that a name is current unless it explicitly says that it is temporary or old.
   */
  public use?: fhir.FhirCode<NameUseCodeType>|undefined;
  /**
   * Can provide both a text representation and parts. Applications updating a name SHALL ensure that when both text and parts are present,  no content is included in the text that isn't found in a part.
   */
  public text?: fhir.FhirString|undefined;
  /**
   * Family Name may be decomposed into specific parts using extensions (de, nl, es related cultures).
   */
  public family?: fhir.FhirString|undefined;
  /**
   * If only initials are recorded, they may be used in place of the full name parts. Initials may be separated into multiple given names but often aren't due to paractical limitations.  This element is not called "first name" since given names do not always come first.
   */
  public given: fhir.FhirString[];
  /**
   * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.
   */
  public prefix: fhir.FhirString[];
  /**
   * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.
   */
  public suffix: fhir.FhirString[];
  /**
   * Indicates the period of time when this name was valid for the named person.
   */
  public period?: fhir.Period|undefined;
  /**
   * Default constructor for HumanName - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<HumanNameArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['use']) { this.use = new fhir.FhirCode<NameUseCodeType>({value: source.use}); }
    if (source['_use']) {
      if (this.use) { this.use.addExtendedProperties(source._use!); }
      else { this.use = new fhir.FhirCode<NameUseCodeType>(source._use as Partial<fhir.FhirCode>); }
    }
    if (source['text']) { this.text = new fhir.FhirString({value: source.text}); }
    if (source['_text']) {
      if (this.text) { this.text.addExtendedProperties(source._text!); }
      else { this.text = new fhir.FhirString(source._text as Partial<fhir.FhirStringArgs>); }
    }
    if (source['family']) { this.family = new fhir.FhirString({value: source.family}); }
    if (source['_family']) {
      if (this.family) { this.family.addExtendedProperties(source._family!); }
      else { this.family = new fhir.FhirString(source._family as Partial<fhir.FhirStringArgs>); }
    }
    if (source['given']) { this.given = source.given.map((x) => new fhir.FhirString({value: x})); }
    else { this.given = []; }
    if (source['_given']) {
      source._given.forEach((x,i) => {
        if (this.given.length >= i) { if (x) { this.given[i].addExtendedProperties(x); } }
        else { if (x) { this.given.push(new fhir.FhirString(x as Partial<fhir.FhirStringArgs>)); } }
      });
    }
    if (source['prefix']) { this.prefix = source.prefix.map((x) => new fhir.FhirString({value: x})); }
    else { this.prefix = []; }
    if (source['_prefix']) {
      source._prefix.forEach((x,i) => {
        if (this.prefix.length >= i) { if (x) { this.prefix[i].addExtendedProperties(x); } }
        else { if (x) { this.prefix.push(new fhir.FhirString(x as Partial<fhir.FhirStringArgs>)); } }
      });
    }
    if (source['suffix']) { this.suffix = source.suffix.map((x) => new fhir.FhirString({value: x})); }
    else { this.suffix = []; }
    if (source['_suffix']) {
      source._suffix.forEach((x,i) => {
        if (this.suffix.length >= i) { if (x) { this.suffix[i].addExtendedProperties(x); } }
        else { if (x) { this.suffix.push(new fhir.FhirString(x as Partial<fhir.FhirStringArgs>)); } }
      });
    }
    if (source['period']) { this.period = new fhir.Period(source.period); }
  }
  /**
   * Required-bound Value Set for use (HumanName.use)
   */
  public static get useRequiredCodes() {
    return NameUseCodes;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'HumanName' }
    if (this['use'] && (!Object.values(NameUseCodes).includes(this.use.value as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'use (HumanName.use) of type code is missing code for Required binding to: NameUse', expression: [expression] });
    }
    if (this["use"]) { issues.push(...this.use.doModelValidation(expression+'.use')); }
    if (this["text"]) { issues.push(...this.text.doModelValidation(expression+'.text')); }
    if (this["family"]) { issues.push(...this.family.doModelValidation(expression+'.family')); }
    if (this["given"]) { this.given.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.given[${i}]`)); }) }
    if (this["prefix"]) { this.prefix.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.prefix[${i}]`)); }) }
    if (this["suffix"]) { this.suffix.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.suffix[${i}]`)); }) }
    if (this["period"]) { issues.push(...this.period.doModelValidation(expression+'.period')); }
    return issues;
  }

/**
 * Convert a HumanName into a displayable string
 */
toDisplay(familyFirst:boolean = true, includeAnnotations:boolean = false):string {
  if ((this.text) && (this.text.length > 0)) {
    return this.text.toString();
  }

  var val:string = '';

  if (familyFirst) {
    if (this.family) {
      val = this.family.toString();
    }

    if (this.given) {
      val += (val.length > 0 ? ', ' : '') + this.given.join(' ');
    }

    if (includeAnnotations) {
      if (this.suffix) {
        val += (val.length > 0 ? ', ' : '') + this.suffix.join(', ');
      }

      if (this.prefix) {
        val += (val.length > 0 ? ', ' : '') + this.prefix.join(', ');
      }
    }

    return val;
  }

  if ((includeAnnotations) && (this.prefix)) {
    val += this.prefix.join(', ');
  }

  if (this.given) {
    val = (val.length > 0 ? ' ' : '') + this.given.join(' ');
  }
  if (this.family) {
    val += (val.length > 0 ? ' ' : '') + this.family;
  }

  if ((includeAnnotations) && (this.suffix)) {
    val += (val.length > 0 ? ', ' : '') + this.suffix.join(', ');
  }

  return val;
}
}
