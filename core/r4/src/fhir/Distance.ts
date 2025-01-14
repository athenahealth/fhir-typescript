// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Distance

import * as fhir from '../fhir.js';

/**
 * Valid arguments for the Distance type.
 */
export interface DistanceArgs extends fhir.QuantityArgs {
}

/**
 * A length - a value with a unit that is a physical distance.
 */
export class Distance extends fhir.Quantity {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Distance';
  /**
   * Default constructor for Distance - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DistanceArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'Distance' }
    return issues;
  }
}
