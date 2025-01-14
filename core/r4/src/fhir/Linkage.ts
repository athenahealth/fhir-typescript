// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Linkage

import * as fhir from '../fhir.js';

// @ts-ignore
import { LinkageTypeCodings, LinkageTypeCodingType,} from '../fhirValueSets/LinkageTypeCodings.js';
// @ts-ignore
import { LinkageTypeCodes,  LinkageTypeCodeType } from '../fhirValueSets/LinkageTypeCodes.js';
/**
 * Valid arguments for the LinkageItem type.
 */
export interface LinkageItemArgs extends fhir.BackboneElementArgs {
  /**
   * Distinguishes which item is "source of truth" (if any) and which items are no longer considered to be current representations.
   */
  type: fhir.FhirCode<LinkageTypeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Linkage.item.type
   */
  _type?:fhir.FhirElementArgs;
  /**
   * The resource instance being linked as part of the group.
   */
  resource: fhir.ReferenceArgs|null;
}

/**
 * Identifies which record considered as the reference to the same real-world occurrence as well as how the items should be evaluated within the collection of linked items.
 */
export class LinkageItem extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'LinkageItem';
  /**
   * Distinguishes which item is "source of truth" (if any) and which items are no longer considered to be current representations.
   */
  public type: fhir.FhirCode<LinkageTypeCodeType>|null;
  /**
   * The resource instance being linked as part of the group.
   */
  public resource: fhir.Reference|null;
  /**
   * Default constructor for LinkageItem - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<LinkageItemArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.FhirCode<LinkageTypeCodeType>({value: source.type}); }
    else { this.type = null; }
    if (source['_type']) {
      if (this.type) { this.type.addExtendedProperties(source._type!); }
      else { this.type = new fhir.FhirCode<LinkageTypeCodeType>(source._type as Partial<fhir.FhirCode>); }
    }
    if (source['resource']) { this.resource = new fhir.Reference(source.resource); }
    else { this.resource = null; }
  }
  /**
   * Required-bound Value Set for type (Linkage.item.type)
   */
  public static get typeRequiredCodes() {
    return LinkageTypeCodes;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'Linkage.item' }
    if (!this['type']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property type fhir: Linkage.item.type:code', expression: [expression] });
    }
    if (this['type'] && (!Object.values(LinkageTypeCodes).includes(this.type.value as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'type (Linkage.item.type) of type code is missing code for Required binding to: LinkageType', expression: [expression] });
    }
    if (this["type"]) { issues.push(...this.type.doModelValidation(expression+'.type')); }
    if (!this['resource']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resource fhir: Linkage.item.resource:Reference', expression: [expression] });
    }
    if (this["resource"]) { issues.push(...this.resource.doModelValidation(expression+'.resource')); }
    return issues;
  }
}
/**
 * Valid arguments for the Linkage type.
 */
export interface LinkageArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Linkage"|undefined;
  /**
   * If false, any asserted linkages should not be considered current/relevant/applicable.
   */
  active?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: Linkage.active
   */
  _active?:fhir.FhirElementArgs;
  /**
   * Identifies the user or organization responsible for asserting the linkages as well as the user or organization who establishes the context in which the nature of each linkage is evaluated.
   */
  author?: fhir.ReferenceArgs|undefined;
  /**
   * Identifies which record considered as the reference to the same real-world occurrence as well as how the items should be evaluated within the collection of linked items.
   */
  item: fhir.LinkageItemArgs[]|null;
}

/**
 * Identifies two or more records (resource instances) that refer to the same real-world "occurrence".
 */
export class Linkage extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Linkage';
  /**
   * Resource Type Name
   */
  public override resourceType: "Linkage";
  /**
   * If false, any asserted linkages should not be considered current/relevant/applicable.
   */
  public active?: fhir.FhirBoolean|undefined;
  /**
   * Identifies the user or organization responsible for asserting the linkages as well as the user or organization who establishes the context in which the nature of each linkage is evaluated.
   */
  public author?: fhir.Reference|undefined;
  /**
   * Identifies which record considered as the reference to the same real-world occurrence as well as how the items should be evaluated within the collection of linked items.
   */
  public item: fhir.LinkageItem[];
  /**
   * Default constructor for Linkage - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<LinkageArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Linkage';
    if (source['active']) { this.active = new fhir.FhirBoolean({value: source.active}); }
    if (source['_active']) {
      if (this.active) { this.active.addExtendedProperties(source._active!); }
      else { this.active = new fhir.FhirBoolean(source._active as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['author']) { this.author = new fhir.Reference(source.author); }
    if (source['item']) { this.item = source.item.map((x) => new fhir.LinkageItem(x)); }
    else { this.item = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'Linkage' }
    if (!this['resourceType']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType fhir: Linkage.resourceType:"Linkage"', expression: [expression] });
    }
    if (this["active"]) { issues.push(...this.active.doModelValidation(expression+'.active')); }
    if (this["author"]) { issues.push(...this.author.doModelValidation(expression+'.author')); }
    if (!this['item']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property item fhir: Linkage.item:item', expression: [expression] });
    } else if (!Array.isArray(this.item)) {
      issues.push({ severity: 'error', code: 'structure', diagnostics: 'Found scalar in array property item fhir: Linkage.item:item', expression: [expression] });
    } else if (this.item.length === 0) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property item fhir: Linkage.item:item', expression: [expression] });
    }
    if (this["item"]) { this.item.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.item[${i}]`)); }) }
    return issues;
  }
}
