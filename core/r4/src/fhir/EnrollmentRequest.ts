// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: EnrollmentRequest

import * as fhir from '../fhir.js';

// @ts-ignore
import { FmStatusCodings, FmStatusCodingType,} from '../fhirValueSets/FmStatusCodings.js';
// @ts-ignore
import { FmStatusCodes,  FmStatusCodeType } from '../fhirValueSets/FmStatusCodes.js';
/**
 * Valid arguments for the EnrollmentRequest type.
 */
export interface EnrollmentRequestArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "EnrollmentRequest"|undefined;
  /**
   * The Response business identifier.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the request as not currently valid.
   */
  status?: fhir.FhirCode<FmStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: EnrollmentRequest.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * The date when this resource was created.
   */
  created?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: EnrollmentRequest.created
   */
  _created?:fhir.FhirElementArgs;
  /**
   * The Insurer who is target  of the request.
   */
  insurer?: fhir.ReferenceArgs|undefined;
  /**
   * The practitioner who is responsible for the services rendered to the patient.
   */
  provider?: fhir.ReferenceArgs|undefined;
  /**
   * Patient Resource.
   */
  candidate?: fhir.ReferenceArgs|undefined;
  /**
   * Reference to the program or plan identification, underwriter or payor.
   */
  coverage?: fhir.ReferenceArgs|undefined;
}

/**
 * This resource provides the insurance enrollment details to the insurer regarding a specified coverage.
 */
export class EnrollmentRequest extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'EnrollmentRequest';
  /**
   * Resource Type Name
   */
  public override resourceType: "EnrollmentRequest";
  /**
   * The Response business identifier.
   */
  public identifier: fhir.Identifier[];
  /**
   * This element is labeled as a modifier because the status contains codes that mark the request as not currently valid.
   */
  public status?: fhir.FhirCode<FmStatusCodeType>|undefined;
  /**
   * The date when this resource was created.
   */
  public created?: fhir.FhirDateTime|undefined;
  /**
   * The Insurer who is target  of the request.
   */
  public insurer?: fhir.Reference|undefined;
  /**
   * The practitioner who is responsible for the services rendered to the patient.
   */
  public provider?: fhir.Reference|undefined;
  /**
   * Patient Resource.
   */
  public candidate?: fhir.Reference|undefined;
  /**
   * Reference to the program or plan identification, underwriter or payor.
   */
  public coverage?: fhir.Reference|undefined;
  /**
   * Default constructor for EnrollmentRequest - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<EnrollmentRequestArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'EnrollmentRequest';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['status']) { this.status = new fhir.FhirCode<FmStatusCodeType>({value: source.status}); }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<FmStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['created']) { this.created = new fhir.FhirDateTime({value: source.created}); }
    if (source['_created']) {
      if (this.created) { this.created.addExtendedProperties(source._created!); }
      else { this.created = new fhir.FhirDateTime(source._created as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['insurer']) { this.insurer = new fhir.Reference(source.insurer); }
    if (source['provider']) { this.provider = new fhir.Reference(source.provider); }
    if (source['candidate']) { this.candidate = new fhir.Reference(source.candidate); }
    if (source['coverage']) { this.coverage = new fhir.Reference(source.coverage); }
  }
  /**
   * Required-bound Value Set for status (EnrollmentRequest.status)
   */
  public static get statusRequiredCodes() {
    return FmStatusCodes;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'EnrollmentRequest' }
    if (!this['resourceType']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType fhir: EnrollmentRequest.resourceType:"EnrollmentRequest"', expression: [expression] });
    }
    if (this["identifier"]) { this.identifier.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.identifier[${i}]`)); }) }
    if (this['status'] && (!Object.values(FmStatusCodes).includes(this.status.value as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'status (EnrollmentRequest.status) of type code is missing code for Required binding to: FmStatus', expression: [expression] });
    }
    if (this["status"]) { issues.push(...this.status.doModelValidation(expression+'.status')); }
    if (this["created"]) { issues.push(...this.created.doModelValidation(expression+'.created')); }
    if (this["insurer"]) { issues.push(...this.insurer.doModelValidation(expression+'.insurer')); }
    if (this["provider"]) { issues.push(...this.provider.doModelValidation(expression+'.provider')); }
    if (this["candidate"]) { issues.push(...this.candidate.doModelValidation(expression+'.candidate')); }
    if (this["coverage"]) { issues.push(...this.coverage.doModelValidation(expression+'.coverage')); }
    return issues;
  }
}
