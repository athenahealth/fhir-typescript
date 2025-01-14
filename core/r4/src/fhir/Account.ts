// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Account

import * as fhir from '../fhir.js';

// @ts-ignore
import { AccountStatusCodings, AccountStatusCodingType,} from '../fhirValueSets/AccountStatusCodings.js';
// @ts-ignore
import { AccountStatusCodes,  AccountStatusCodeType } from '../fhirValueSets/AccountStatusCodes.js';
// @ts-ignore
import { AccountTypeCodings, AccountTypeCodingType,} from '../fhirValueSets/AccountTypeCodings.js';
// @ts-ignore
import { AccountTypeCodes,  AccountTypeCodeType } from '../fhirValueSets/AccountTypeCodes.js';
/**
 * Valid arguments for the AccountCoverage type.
 */
export interface AccountCoverageArgs extends fhir.BackboneElementArgs {
  /**
   * The party(s) that contribute to payment (or part of) of the charges applied to this account (including self-pay).
   * A coverage may only be responsible for specific types of charges, and the sequence of the coverages in the account could be important when processing billing.
   */
  coverage: fhir.ReferenceArgs|null;
  /**
   * It is common in some jurisdictions for there to be multiple coverages allocated to an account, and a sequence is required to order the settling of the account (often with insurance claiming).
   */
  priority?: fhir.FhirPositiveInt|number|undefined;
  /**
   * Extended properties for primitive element: Account.coverage.priority
   */
  _priority?:fhir.FhirElementArgs;
}

/**
 * Typically. this may be some form of insurance, internal charges, or self-pay.
 * Local or jurisdictional business rules may determine which coverage covers which types of billable items charged to the account, and in which order.
 * Where the order is important, a local/jurisdictional extension may be defined to specify the order for the type of charge.
 */
export class AccountCoverage extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'AccountCoverage';
  /**
   * The party(s) that contribute to payment (or part of) of the charges applied to this account (including self-pay).
   * A coverage may only be responsible for specific types of charges, and the sequence of the coverages in the account could be important when processing billing.
   */
  public coverage: fhir.Reference|null;
  /**
   * It is common in some jurisdictions for there to be multiple coverages allocated to an account, and a sequence is required to order the settling of the account (often with insurance claiming).
   */
  public priority?: fhir.FhirPositiveInt|undefined;
  /**
   * Default constructor for AccountCoverage - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<AccountCoverageArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['coverage']) { this.coverage = new fhir.Reference(source.coverage); }
    else { this.coverage = null; }
    if (source['priority']) { this.priority = new fhir.FhirPositiveInt({value: source.priority}); }
    if (source['_priority']) {
      if (this.priority) { this.priority.addExtendedProperties(source._priority!); }
      else { this.priority = new fhir.FhirPositiveInt(source._priority as Partial<fhir.FhirPositiveIntArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'Account.coverage' }
    if (!this['coverage']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property coverage fhir: Account.coverage.coverage:Reference', expression: [expression] });
    }
    if (this["coverage"]) { issues.push(...this.coverage.doModelValidation(expression+'.coverage')); }
    if (this["priority"]) { issues.push(...this.priority.doModelValidation(expression+'.priority')); }
    return issues;
  }
}
/**
 * Valid arguments for the AccountGuarantor type.
 */
export interface AccountGuarantorArgs extends fhir.BackboneElementArgs {
  /**
   * The entity who is responsible.
   */
  party: fhir.ReferenceArgs|null;
  /**
   * A guarantor may be placed on credit hold or otherwise have their role temporarily suspended.
   */
  onHold?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: Account.guarantor.onHold
   */
  _onHold?:fhir.FhirElementArgs;
  /**
   * The timeframe during which the guarantor accepts responsibility for the account.
   */
  period?: fhir.PeriodArgs|undefined;
}

/**
 * The parties responsible for balancing the account if other payment options fall short.
 */
export class AccountGuarantor extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'AccountGuarantor';
  /**
   * The entity who is responsible.
   */
  public party: fhir.Reference|null;
  /**
   * A guarantor may be placed on credit hold or otherwise have their role temporarily suspended.
   */
  public onHold?: fhir.FhirBoolean|undefined;
  /**
   * The timeframe during which the guarantor accepts responsibility for the account.
   */
  public period?: fhir.Period|undefined;
  /**
   * Default constructor for AccountGuarantor - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<AccountGuarantorArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['party']) { this.party = new fhir.Reference(source.party); }
    else { this.party = null; }
    if (source['onHold']) { this.onHold = new fhir.FhirBoolean({value: source.onHold}); }
    if (source['_onHold']) {
      if (this.onHold) { this.onHold.addExtendedProperties(source._onHold!); }
      else { this.onHold = new fhir.FhirBoolean(source._onHold as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['period']) { this.period = new fhir.Period(source.period); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'Account.guarantor' }
    if (!this['party']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property party fhir: Account.guarantor.party:Reference', expression: [expression] });
    }
    if (this["party"]) { issues.push(...this.party.doModelValidation(expression+'.party')); }
    if (this["onHold"]) { issues.push(...this.onHold.doModelValidation(expression+'.onHold')); }
    if (this["period"]) { issues.push(...this.period.doModelValidation(expression+'.period')); }
    return issues;
  }
}
/**
 * Valid arguments for the Account type.
 */
export interface AccountArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Account"|undefined;
  /**
   * Unique identifier used to reference the account.  Might or might not be intended for human use (e.g. credit card number).
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains the codes inactive and entered-in-error that mark the Account as not currently valid.
   */
  status: fhir.FhirCode<AccountStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Account.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * Categorizes the account for reporting and searching purposes.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * Name used for the account when displaying it to humans in reports, etc.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Account.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * Accounts can be applied to non-patients for tracking other non-patient related activities, such as group services (patients not tracked, and costs charged to another body), or might not be allocated.
   */
  subject?: fhir.ReferenceArgs[]|undefined;
  /**
   * It is possible for transactions to be posted outside the service period, as long as the service was provided within the defined service period.
   */
  servicePeriod?: fhir.PeriodArgs|undefined;
  /**
   * Typically. this may be some form of insurance, internal charges, or self-pay.
   * Local or jurisdictional business rules may determine which coverage covers which types of billable items charged to the account, and in which order.
   * Where the order is important, a local/jurisdictional extension may be defined to specify the order for the type of charge.
   */
  coverage?: fhir.AccountCoverageArgs[]|undefined;
  /**
   * Indicates the service area, hospital, department, etc. with responsibility for managing the Account.
   */
  owner?: fhir.ReferenceArgs|undefined;
  /**
   * Provides additional information about what the account tracks and how it is used.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Account.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * The parties responsible for balancing the account if other payment options fall short.
   */
  guarantor?: fhir.AccountGuarantorArgs[]|undefined;
  /**
   * Reference to a parent Account.
   */
  partOf?: fhir.ReferenceArgs|undefined;
}

/**
 * A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc.
 */
export class Account extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Account';
  /**
   * Resource Type Name
   */
  public override resourceType: "Account";
  /**
   * Unique identifier used to reference the account.  Might or might not be intended for human use (e.g. credit card number).
   */
  public identifier: fhir.Identifier[];
  /**
   * This element is labeled as a modifier because the status contains the codes inactive and entered-in-error that mark the Account as not currently valid.
   */
  public status: fhir.FhirCode<AccountStatusCodeType>|null;
  /**
   * Categorizes the account for reporting and searching purposes.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * Name used for the account when displaying it to humans in reports, etc.
   */
  public name?: fhir.FhirString|undefined;
  /**
   * Accounts can be applied to non-patients for tracking other non-patient related activities, such as group services (patients not tracked, and costs charged to another body), or might not be allocated.
   */
  public subject: fhir.Reference[];
  /**
   * It is possible for transactions to be posted outside the service period, as long as the service was provided within the defined service period.
   */
  public servicePeriod?: fhir.Period|undefined;
  /**
   * Typically. this may be some form of insurance, internal charges, or self-pay.
   * Local or jurisdictional business rules may determine which coverage covers which types of billable items charged to the account, and in which order.
   * Where the order is important, a local/jurisdictional extension may be defined to specify the order for the type of charge.
   */
  public coverage: fhir.AccountCoverage[];
  /**
   * Indicates the service area, hospital, department, etc. with responsibility for managing the Account.
   */
  public owner?: fhir.Reference|undefined;
  /**
   * Provides additional information about what the account tracks and how it is used.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * The parties responsible for balancing the account if other payment options fall short.
   */
  public guarantor: fhir.AccountGuarantor[];
  /**
   * Reference to a parent Account.
   */
  public partOf?: fhir.Reference|undefined;
  /**
   * Default constructor for Account - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<AccountArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Account';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['status']) { this.status = new fhir.FhirCode<AccountStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<AccountStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    if (source['name']) { this.name = new fhir.FhirString({value: source.name}); }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirString(source._name as Partial<fhir.FhirStringArgs>); }
    }
    if (source['subject']) { this.subject = source.subject.map((x) => new fhir.Reference(x)); }
    else { this.subject = []; }
    if (source['servicePeriod']) { this.servicePeriod = new fhir.Period(source.servicePeriod); }
    if (source['coverage']) { this.coverage = source.coverage.map((x) => new fhir.AccountCoverage(x)); }
    else { this.coverage = []; }
    if (source['owner']) { this.owner = new fhir.Reference(source.owner); }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>); }
    }
    if (source['guarantor']) { this.guarantor = source.guarantor.map((x) => new fhir.AccountGuarantor(x)); }
    else { this.guarantor = []; }
    if (source['partOf']) { this.partOf = new fhir.Reference(source.partOf); }
  }
  /**
   * Required-bound Value Set for status (Account.status)
   */
  public static get statusRequiredCodes() {
    return AccountStatusCodes;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'Account' }
    if (!this['resourceType']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType fhir: Account.resourceType:"Account"', expression: [expression] });
    }
    if (this["identifier"]) { this.identifier.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.identifier[${i}]`)); }) }
    if (!this['status']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property status fhir: Account.status:code', expression: [expression] });
    }
    if (this['status'] && (!Object.values(AccountStatusCodes).includes(this.status.value as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'status (Account.status) of type code is missing code for Required binding to: AccountStatus', expression: [expression] });
    }
    if (this["status"]) { issues.push(...this.status.doModelValidation(expression+'.status')); }
    if (this["type"]) { issues.push(...this.type.doModelValidation(expression+'.type')); }
    if (this["name"]) { issues.push(...this.name.doModelValidation(expression+'.name')); }
    if (this["subject"]) { this.subject.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.subject[${i}]`)); }) }
    if (this["servicePeriod"]) { issues.push(...this.servicePeriod.doModelValidation(expression+'.servicePeriod')); }
    if (this["coverage"]) { this.coverage.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.coverage[${i}]`)); }) }
    if (this["owner"]) { issues.push(...this.owner.doModelValidation(expression+'.owner')); }
    if (this["description"]) { issues.push(...this.description.doModelValidation(expression+'.description')); }
    if (this["guarantor"]) { this.guarantor.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.guarantor[${i}]`)); }) }
    if (this["partOf"]) { issues.push(...this.partOf.doModelValidation(expression+'.partOf')); }
    return issues;
  }
}
