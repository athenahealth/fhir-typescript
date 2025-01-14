// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: MedicinalProduct

import * as fhir from '../fhir.js';

/**
 * Valid arguments for the MedicinalProductNameNamePart type.
 */
export interface MedicinalProductNameNamePartArgs extends fhir.BackboneElementArgs {
  /**
   * A fragment of a product name.
   */
  part: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: MedicinalProduct.name.namePart.part
   */
  _part?:fhir.FhirElementArgs;
  /**
   * Idenifying type for this part of the name (e.g. strength part).
   */
  type: fhir.CodingArgs|null;
}

/**
 * Coding words or phrases of the name.
 */
export class MedicinalProductNameNamePart extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'MedicinalProductNameNamePart';
  /**
   * A fragment of a product name.
   */
  public part: fhir.FhirString|null;
  /**
   * Idenifying type for this part of the name (e.g. strength part).
   */
  public type: fhir.Coding|null;
  /**
   * Default constructor for MedicinalProductNameNamePart - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MedicinalProductNameNamePartArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['part']) { this.part = new fhir.FhirString({value: source.part}); }
    else { this.part = null; }
    if (source['_part']) {
      if (this.part) { this.part.addExtendedProperties(source._part!); }
      else { this.part = new fhir.FhirString(source._part as Partial<fhir.FhirStringArgs>); }
    }
    if (source['type']) { this.type = new fhir.Coding(source.type); }
    else { this.type = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'MedicinalProduct.name.namePart' }
    if (!this['part']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property part fhir: MedicinalProduct.name.namePart.part:string', expression: [expression] });
    }
    if (this["part"]) { issues.push(...this.part.doModelValidation(expression+'.part')); }
    if (!this['type']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property type fhir: MedicinalProduct.name.namePart.type:Coding', expression: [expression] });
    }
    if (this["type"]) { issues.push(...this.type.doModelValidation(expression+'.type')); }
    return issues;
  }
}
/**
 * Valid arguments for the MedicinalProductNameCountryLanguage type.
 */
export interface MedicinalProductNameCountryLanguageArgs extends fhir.BackboneElementArgs {
  /**
   * Country code for where this name applies.
   */
  country: fhir.CodeableConceptArgs|null;
  /**
   * Jurisdiction code for where this name applies.
   */
  jurisdiction?: fhir.CodeableConceptArgs|undefined;
  /**
   * Language code for this name.
   */
  language: fhir.CodeableConceptArgs|null;
}

/**
 * Country where the name applies.
 */
export class MedicinalProductNameCountryLanguage extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'MedicinalProductNameCountryLanguage';
  /**
   * Country code for where this name applies.
   */
  public country: fhir.CodeableConcept|null;
  /**
   * Jurisdiction code for where this name applies.
   */
  public jurisdiction?: fhir.CodeableConcept|undefined;
  /**
   * Language code for this name.
   */
  public language: fhir.CodeableConcept|null;
  /**
   * Default constructor for MedicinalProductNameCountryLanguage - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MedicinalProductNameCountryLanguageArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['country']) { this.country = new fhir.CodeableConcept(source.country); }
    else { this.country = null; }
    if (source['jurisdiction']) { this.jurisdiction = new fhir.CodeableConcept(source.jurisdiction); }
    if (source['language']) { this.language = new fhir.CodeableConcept(source.language); }
    else { this.language = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'MedicinalProduct.name.countryLanguage' }
    if (!this['country']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property country fhir: MedicinalProduct.name.countryLanguage.country:CodeableConcept', expression: [expression] });
    }
    if (this["country"]) { issues.push(...this.country.doModelValidation(expression+'.country')); }
    if (this["jurisdiction"]) { issues.push(...this.jurisdiction.doModelValidation(expression+'.jurisdiction')); }
    if (!this['language']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property language fhir: MedicinalProduct.name.countryLanguage.language:CodeableConcept', expression: [expression] });
    }
    if (this["language"]) { issues.push(...this.language.doModelValidation(expression+'.language')); }
    return issues;
  }
}
/**
 * Valid arguments for the MedicinalProductName type.
 */
export interface MedicinalProductNameArgs extends fhir.BackboneElementArgs {
  /**
   * The full product name.
   */
  productName: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: MedicinalProduct.name.productName
   */
  _productName?:fhir.FhirElementArgs;
  /**
   * Coding words or phrases of the name.
   */
  namePart?: fhir.MedicinalProductNameNamePartArgs[]|undefined;
  /**
   * Country where the name applies.
   */
  countryLanguage?: fhir.MedicinalProductNameCountryLanguageArgs[]|undefined;
}

/**
 * The product's name, including full name and possibly coded parts.
 */
export class MedicinalProductName extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'MedicinalProductName';
  /**
   * The full product name.
   */
  public productName: fhir.FhirString|null;
  /**
   * Coding words or phrases of the name.
   */
  public namePart: fhir.MedicinalProductNameNamePart[];
  /**
   * Country where the name applies.
   */
  public countryLanguage: fhir.MedicinalProductNameCountryLanguage[];
  /**
   * Default constructor for MedicinalProductName - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MedicinalProductNameArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['productName']) { this.productName = new fhir.FhirString({value: source.productName}); }
    else { this.productName = null; }
    if (source['_productName']) {
      if (this.productName) { this.productName.addExtendedProperties(source._productName!); }
      else { this.productName = new fhir.FhirString(source._productName as Partial<fhir.FhirStringArgs>); }
    }
    if (source['namePart']) { this.namePart = source.namePart.map((x) => new fhir.MedicinalProductNameNamePart(x)); }
    else { this.namePart = []; }
    if (source['countryLanguage']) { this.countryLanguage = source.countryLanguage.map((x) => new fhir.MedicinalProductNameCountryLanguage(x)); }
    else { this.countryLanguage = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'MedicinalProduct.name' }
    if (!this['productName']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property productName fhir: MedicinalProduct.name.productName:string', expression: [expression] });
    }
    if (this["productName"]) { issues.push(...this.productName.doModelValidation(expression+'.productName')); }
    if (this["namePart"]) { this.namePart.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.namePart[${i}]`)); }) }
    if (this["countryLanguage"]) { this.countryLanguage.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.countryLanguage[${i}]`)); }) }
    return issues;
  }
}
/**
 * Valid arguments for the MedicinalProductManufacturingBusinessOperation type.
 */
export interface MedicinalProductManufacturingBusinessOperationArgs extends fhir.BackboneElementArgs {
  /**
   * The type of manufacturing operation.
   */
  operationType?: fhir.CodeableConceptArgs|undefined;
  /**
   * Regulatory authorization reference number.
   */
  authorisationReferenceNumber?: fhir.IdentifierArgs|undefined;
  /**
   * Regulatory authorization date.
   */
  effectiveDate?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: MedicinalProduct.manufacturingBusinessOperation.effectiveDate
   */
  _effectiveDate?:fhir.FhirElementArgs;
  /**
   * To indicate if this proces is commercially confidential.
   */
  confidentialityIndicator?: fhir.CodeableConceptArgs|undefined;
  /**
   * The manufacturer or establishment associated with the process.
   */
  manufacturer?: fhir.ReferenceArgs[]|undefined;
  /**
   * A regulator which oversees the operation.
   */
  regulator?: fhir.ReferenceArgs|undefined;
}

/**
 * An operation applied to the product, for manufacturing or adminsitrative purpose.
 */
export class MedicinalProductManufacturingBusinessOperation extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'MedicinalProductManufacturingBusinessOperation';
  /**
   * The type of manufacturing operation.
   */
  public operationType?: fhir.CodeableConcept|undefined;
  /**
   * Regulatory authorization reference number.
   */
  public authorisationReferenceNumber?: fhir.Identifier|undefined;
  /**
   * Regulatory authorization date.
   */
  public effectiveDate?: fhir.FhirDateTime|undefined;
  /**
   * To indicate if this proces is commercially confidential.
   */
  public confidentialityIndicator?: fhir.CodeableConcept|undefined;
  /**
   * The manufacturer or establishment associated with the process.
   */
  public manufacturer: fhir.Reference[];
  /**
   * A regulator which oversees the operation.
   */
  public regulator?: fhir.Reference|undefined;
  /**
   * Default constructor for MedicinalProductManufacturingBusinessOperation - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MedicinalProductManufacturingBusinessOperationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['operationType']) { this.operationType = new fhir.CodeableConcept(source.operationType); }
    if (source['authorisationReferenceNumber']) { this.authorisationReferenceNumber = new fhir.Identifier(source.authorisationReferenceNumber); }
    if (source['effectiveDate']) { this.effectiveDate = new fhir.FhirDateTime({value: source.effectiveDate}); }
    if (source['_effectiveDate']) {
      if (this.effectiveDate) { this.effectiveDate.addExtendedProperties(source._effectiveDate!); }
      else { this.effectiveDate = new fhir.FhirDateTime(source._effectiveDate as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['confidentialityIndicator']) { this.confidentialityIndicator = new fhir.CodeableConcept(source.confidentialityIndicator); }
    if (source['manufacturer']) { this.manufacturer = source.manufacturer.map((x) => new fhir.Reference(x)); }
    else { this.manufacturer = []; }
    if (source['regulator']) { this.regulator = new fhir.Reference(source.regulator); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'MedicinalProduct.manufacturingBusinessOperation' }
    if (this["operationType"]) { issues.push(...this.operationType.doModelValidation(expression+'.operationType')); }
    if (this["authorisationReferenceNumber"]) { issues.push(...this.authorisationReferenceNumber.doModelValidation(expression+'.authorisationReferenceNumber')); }
    if (this["effectiveDate"]) { issues.push(...this.effectiveDate.doModelValidation(expression+'.effectiveDate')); }
    if (this["confidentialityIndicator"]) { issues.push(...this.confidentialityIndicator.doModelValidation(expression+'.confidentialityIndicator')); }
    if (this["manufacturer"]) { this.manufacturer.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.manufacturer[${i}]`)); }) }
    if (this["regulator"]) { issues.push(...this.regulator.doModelValidation(expression+'.regulator')); }
    return issues;
  }
}
/**
 * Valid arguments for the MedicinalProductSpecialDesignation type.
 */
export interface MedicinalProductSpecialDesignationArgs extends fhir.BackboneElementArgs {
  /**
   * Identifier for the designation, or procedure number.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * The type of special designation, e.g. orphan drug, minor use.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * The intended use of the product, e.g. prevention, treatment.
   */
  intendedUse?: fhir.CodeableConceptArgs|undefined;
  /**
   * Condition for which the medicinal use applies.
   */
  indication?: fhir.CodeableConcept|fhir.Reference|undefined;
  /**
   * Condition for which the medicinal use applies.
   */
  indicationCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * Condition for which the medicinal use applies.
   */
  indicationReference?: fhir.ReferenceArgs|undefined;
  /**
   * For example granted, pending, expired or withdrawn.
   */
  status?: fhir.CodeableConceptArgs|undefined;
  /**
   * Date when the designation was granted.
   */
  date?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: MedicinalProduct.specialDesignation.date
   */
  _date?:fhir.FhirElementArgs;
  /**
   * Animal species for which this applies.
   */
  species?: fhir.CodeableConceptArgs|undefined;
}

/**
 * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.
 */
export class MedicinalProductSpecialDesignation extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'MedicinalProductSpecialDesignation';
  /**
   * Identifier for the designation, or procedure number.
   */
  public identifier: fhir.Identifier[];
  /**
   * The type of special designation, e.g. orphan drug, minor use.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * The intended use of the product, e.g. prevention, treatment.
   */
  public intendedUse?: fhir.CodeableConcept|undefined;
  /**
   * Condition for which the medicinal use applies.
   */
  public indication?: (fhir.CodeableConcept|fhir.Reference)|undefined;
  /**
   * Internal flag to properly serialize choice-type element MedicinalProduct.specialDesignation.indication[x]
   */
  protected static readonly _fts_indicationIsChoice:true = true;
  /**
   * For example granted, pending, expired or withdrawn.
   */
  public status?: fhir.CodeableConcept|undefined;
  /**
   * Date when the designation was granted.
   */
  public date?: fhir.FhirDateTime|undefined;
  /**
   * Animal species for which this applies.
   */
  public species?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for MedicinalProductSpecialDesignation - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MedicinalProductSpecialDesignationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    if (source['intendedUse']) { this.intendedUse = new fhir.CodeableConcept(source.intendedUse); }
    if (source['indication']) { this.indication = source.indication; }
    else if (source['indicationCodeableConcept']) { this.indication = new fhir.CodeableConcept(source.indicationCodeableConcept); }
    else if (source['indicationReference']) { this.indication = new fhir.Reference(source.indicationReference); }
    if (source['status']) { this.status = new fhir.CodeableConcept(source.status); }
    if (source['date']) { this.date = new fhir.FhirDateTime({value: source.date}); }
    if (source['_date']) {
      if (this.date) { this.date.addExtendedProperties(source._date!); }
      else { this.date = new fhir.FhirDateTime(source._date as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['species']) { this.species = new fhir.CodeableConcept(source.species); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'MedicinalProduct.specialDesignation' }
    if (this["identifier"]) { this.identifier.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.identifier[${i}]`)); }) }
    if (this["type"]) { issues.push(...this.type.doModelValidation(expression+'.type')); }
    if (this["intendedUse"]) { issues.push(...this.intendedUse.doModelValidation(expression+'.intendedUse')); }
    if (this["status"]) { issues.push(...this.status.doModelValidation(expression+'.status')); }
    if (this["date"]) { issues.push(...this.date.doModelValidation(expression+'.date')); }
    if (this["species"]) { issues.push(...this.species.doModelValidation(expression+'.species')); }
    return issues;
  }
}
/**
 * Valid arguments for the MedicinalProduct type.
 */
export interface MedicinalProductArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "MedicinalProduct"|undefined;
  /**
   * Business identifier for this product. Could be an MPID.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Regulatory type, e.g. Investigational or Authorized.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * If this medicine applies to human or veterinary uses.
   */
  domain?: fhir.CodingArgs|undefined;
  /**
   * The dose form for a single part product, or combined form of a multiple part product.
   */
  combinedPharmaceuticalDoseForm?: fhir.CodeableConceptArgs|undefined;
  /**
   * The legal status of supply of the medicinal product as classified by the regulator.
   */
  legalStatusOfSupply?: fhir.CodeableConceptArgs|undefined;
  /**
   * Whether the Medicinal Product is subject to additional monitoring for regulatory reasons.
   */
  additionalMonitoringIndicator?: fhir.CodeableConceptArgs|undefined;
  /**
   * Whether the Medicinal Product is subject to special measures for regulatory reasons.
   */
  specialMeasures?: fhir.FhirString[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: MedicinalProduct.specialMeasures
   */
  _specialMeasures?:(fhir.FhirElementArgs|null)[];
  /**
   * If authorised for use in children.
   */
  paediatricUseIndicator?: fhir.CodeableConceptArgs|undefined;
  /**
   * Allows the product to be classified by various systems.
   */
  productClassification?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Marketing status of the medicinal product, in contrast to marketing authorizaton.
   */
  marketingStatus?: fhir.MarketingStatusArgs[]|undefined;
  /**
   * Pharmaceutical aspects of product.
   */
  pharmaceuticalProduct?: fhir.ReferenceArgs[]|undefined;
  /**
   * Package representation for the product.
   */
  packagedMedicinalProduct?: fhir.ReferenceArgs[]|undefined;
  /**
   * Supporting documentation, typically for regulatory submission.
   */
  attachedDocument?: fhir.ReferenceArgs[]|undefined;
  /**
   * A master file for to the medicinal product (e.g. Pharmacovigilance System Master File).
   */
  masterFile?: fhir.ReferenceArgs[]|undefined;
  /**
   * A product specific contact, person (in a role), or an organization.
   */
  contact?: fhir.ReferenceArgs[]|undefined;
  /**
   * Clinical trials or studies that this product is involved in.
   */
  clinicalTrial?: fhir.ReferenceArgs[]|undefined;
  /**
   * The product's name, including full name and possibly coded parts.
   */
  name: fhir.MedicinalProductNameArgs[]|null;
  /**
   * Reference to another product, e.g. for linking authorised to investigational product.
   */
  crossReference?: fhir.IdentifierArgs[]|undefined;
  /**
   * An operation applied to the product, for manufacturing or adminsitrative purpose.
   */
  manufacturingBusinessOperation?: fhir.MedicinalProductManufacturingBusinessOperationArgs[]|undefined;
  /**
   * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.
   */
  specialDesignation?: fhir.MedicinalProductSpecialDesignationArgs[]|undefined;
}

/**
 * Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use).
 */
export class MedicinalProduct extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'MedicinalProduct';
  /**
   * Resource Type Name
   */
  public override resourceType: "MedicinalProduct";
  /**
   * Business identifier for this product. Could be an MPID.
   */
  public identifier: fhir.Identifier[];
  /**
   * Regulatory type, e.g. Investigational or Authorized.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * If this medicine applies to human or veterinary uses.
   */
  public domain?: fhir.Coding|undefined;
  /**
   * The dose form for a single part product, or combined form of a multiple part product.
   */
  public combinedPharmaceuticalDoseForm?: fhir.CodeableConcept|undefined;
  /**
   * The legal status of supply of the medicinal product as classified by the regulator.
   */
  public legalStatusOfSupply?: fhir.CodeableConcept|undefined;
  /**
   * Whether the Medicinal Product is subject to additional monitoring for regulatory reasons.
   */
  public additionalMonitoringIndicator?: fhir.CodeableConcept|undefined;
  /**
   * Whether the Medicinal Product is subject to special measures for regulatory reasons.
   */
  public specialMeasures: fhir.FhirString[];
  /**
   * If authorised for use in children.
   */
  public paediatricUseIndicator?: fhir.CodeableConcept|undefined;
  /**
   * Allows the product to be classified by various systems.
   */
  public productClassification: fhir.CodeableConcept[];
  /**
   * Marketing status of the medicinal product, in contrast to marketing authorizaton.
   */
  public marketingStatus: fhir.MarketingStatus[];
  /**
   * Pharmaceutical aspects of product.
   */
  public pharmaceuticalProduct: fhir.Reference[];
  /**
   * Package representation for the product.
   */
  public packagedMedicinalProduct: fhir.Reference[];
  /**
   * Supporting documentation, typically for regulatory submission.
   */
  public attachedDocument: fhir.Reference[];
  /**
   * A master file for to the medicinal product (e.g. Pharmacovigilance System Master File).
   */
  public masterFile: fhir.Reference[];
  /**
   * A product specific contact, person (in a role), or an organization.
   */
  public contact: fhir.Reference[];
  /**
   * Clinical trials or studies that this product is involved in.
   */
  public clinicalTrial: fhir.Reference[];
  /**
   * The product's name, including full name and possibly coded parts.
   */
  public name: fhir.MedicinalProductName[];
  /**
   * Reference to another product, e.g. for linking authorised to investigational product.
   */
  public crossReference: fhir.Identifier[];
  /**
   * An operation applied to the product, for manufacturing or adminsitrative purpose.
   */
  public manufacturingBusinessOperation: fhir.MedicinalProductManufacturingBusinessOperation[];
  /**
   * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.
   */
  public specialDesignation: fhir.MedicinalProductSpecialDesignation[];
  /**
   * Default constructor for MedicinalProduct - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MedicinalProductArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'MedicinalProduct';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    if (source['domain']) { this.domain = new fhir.Coding(source.domain); }
    if (source['combinedPharmaceuticalDoseForm']) { this.combinedPharmaceuticalDoseForm = new fhir.CodeableConcept(source.combinedPharmaceuticalDoseForm); }
    if (source['legalStatusOfSupply']) { this.legalStatusOfSupply = new fhir.CodeableConcept(source.legalStatusOfSupply); }
    if (source['additionalMonitoringIndicator']) { this.additionalMonitoringIndicator = new fhir.CodeableConcept(source.additionalMonitoringIndicator); }
    if (source['specialMeasures']) { this.specialMeasures = source.specialMeasures.map((x) => new fhir.FhirString({value: x})); }
    else { this.specialMeasures = []; }
    if (source['_specialMeasures']) {
      source._specialMeasures.forEach((x,i) => {
        if (this.specialMeasures.length >= i) { if (x) { this.specialMeasures[i].addExtendedProperties(x); } }
        else { if (x) { this.specialMeasures.push(new fhir.FhirString(x as Partial<fhir.FhirStringArgs>)); } }
      });
    }
    if (source['paediatricUseIndicator']) { this.paediatricUseIndicator = new fhir.CodeableConcept(source.paediatricUseIndicator); }
    if (source['productClassification']) { this.productClassification = source.productClassification.map((x) => new fhir.CodeableConcept(x)); }
    else { this.productClassification = []; }
    if (source['marketingStatus']) { this.marketingStatus = source.marketingStatus.map((x) => new fhir.MarketingStatus(x)); }
    else { this.marketingStatus = []; }
    if (source['pharmaceuticalProduct']) { this.pharmaceuticalProduct = source.pharmaceuticalProduct.map((x) => new fhir.Reference(x)); }
    else { this.pharmaceuticalProduct = []; }
    if (source['packagedMedicinalProduct']) { this.packagedMedicinalProduct = source.packagedMedicinalProduct.map((x) => new fhir.Reference(x)); }
    else { this.packagedMedicinalProduct = []; }
    if (source['attachedDocument']) { this.attachedDocument = source.attachedDocument.map((x) => new fhir.Reference(x)); }
    else { this.attachedDocument = []; }
    if (source['masterFile']) { this.masterFile = source.masterFile.map((x) => new fhir.Reference(x)); }
    else { this.masterFile = []; }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.Reference(x)); }
    else { this.contact = []; }
    if (source['clinicalTrial']) { this.clinicalTrial = source.clinicalTrial.map((x) => new fhir.Reference(x)); }
    else { this.clinicalTrial = []; }
    if (source['name']) { this.name = source.name.map((x) => new fhir.MedicinalProductName(x)); }
    else { this.name = []; }
    if (source['crossReference']) { this.crossReference = source.crossReference.map((x) => new fhir.Identifier(x)); }
    else { this.crossReference = []; }
    if (source['manufacturingBusinessOperation']) { this.manufacturingBusinessOperation = source.manufacturingBusinessOperation.map((x) => new fhir.MedicinalProductManufacturingBusinessOperation(x)); }
    else { this.manufacturingBusinessOperation = []; }
    if (source['specialDesignation']) { this.specialDesignation = source.specialDesignation.map((x) => new fhir.MedicinalProductSpecialDesignation(x)); }
    else { this.specialDesignation = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'MedicinalProduct' }
    if (!this['resourceType']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType fhir: MedicinalProduct.resourceType:"MedicinalProduct"', expression: [expression] });
    }
    if (this["identifier"]) { this.identifier.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.identifier[${i}]`)); }) }
    if (this["type"]) { issues.push(...this.type.doModelValidation(expression+'.type')); }
    if (this["domain"]) { issues.push(...this.domain.doModelValidation(expression+'.domain')); }
    if (this["combinedPharmaceuticalDoseForm"]) { issues.push(...this.combinedPharmaceuticalDoseForm.doModelValidation(expression+'.combinedPharmaceuticalDoseForm')); }
    if (this["legalStatusOfSupply"]) { issues.push(...this.legalStatusOfSupply.doModelValidation(expression+'.legalStatusOfSupply')); }
    if (this["additionalMonitoringIndicator"]) { issues.push(...this.additionalMonitoringIndicator.doModelValidation(expression+'.additionalMonitoringIndicator')); }
    if (this["specialMeasures"]) { this.specialMeasures.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.specialMeasures[${i}]`)); }) }
    if (this["paediatricUseIndicator"]) { issues.push(...this.paediatricUseIndicator.doModelValidation(expression+'.paediatricUseIndicator')); }
    if (this["productClassification"]) { this.productClassification.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.productClassification[${i}]`)); }) }
    if (this["marketingStatus"]) { this.marketingStatus.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.marketingStatus[${i}]`)); }) }
    if (this["pharmaceuticalProduct"]) { this.pharmaceuticalProduct.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.pharmaceuticalProduct[${i}]`)); }) }
    if (this["packagedMedicinalProduct"]) { this.packagedMedicinalProduct.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.packagedMedicinalProduct[${i}]`)); }) }
    if (this["attachedDocument"]) { this.attachedDocument.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.attachedDocument[${i}]`)); }) }
    if (this["masterFile"]) { this.masterFile.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.masterFile[${i}]`)); }) }
    if (this["contact"]) { this.contact.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.contact[${i}]`)); }) }
    if (this["clinicalTrial"]) { this.clinicalTrial.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.clinicalTrial[${i}]`)); }) }
    if (!this['name']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property name fhir: MedicinalProduct.name:name', expression: [expression] });
    } else if (!Array.isArray(this.name)) {
      issues.push({ severity: 'error', code: 'structure', diagnostics: 'Found scalar in array property name fhir: MedicinalProduct.name:name', expression: [expression] });
    } else if (this.name.length === 0) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property name fhir: MedicinalProduct.name:name', expression: [expression] });
    }
    if (this["name"]) { this.name.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.name[${i}]`)); }) }
    if (this["crossReference"]) { this.crossReference.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.crossReference[${i}]`)); }) }
    if (this["manufacturingBusinessOperation"]) { this.manufacturingBusinessOperation.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.manufacturingBusinessOperation[${i}]`)); }) }
    if (this["specialDesignation"]) { this.specialDesignation.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.specialDesignation[${i}]`)); }) }
    return issues;
  }
}
