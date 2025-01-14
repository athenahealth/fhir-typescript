import * as fhir from '../fhir.js';
import { RequestStatusCodeType } from '../fhirValueSets/RequestStatusCodes.js';
import { RequestIntentCodeType } from '../fhirValueSets/RequestIntentCodes.js';
import { RequestPriorityCodeType } from '../fhirValueSets/RequestPriorityCodes.js';
/**
 * Valid arguments for the ServiceRequest type.
 */
export interface ServiceRequestArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "ServiceRequest" | undefined;
    /**
     * The identifier.type element is used to distinguish between the identifiers assigned by the orderer (known as the 'Placer' in HL7 v2) and the producer of the observations in response to the order (known as the 'Filler' in HL7 v2).  For further discussion and examples see the resource notes section below.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    instantiatesCanonical?: fhir.FhirCanonical[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ServiceRequest.instantiatesCanonical
     */
    _instantiatesCanonical?: (fhir.FhirElementArgs | null)[];
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri?: fhir.FhirUri[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ServiceRequest.instantiatesUri
     */
    _instantiatesUri?: (fhir.FhirElementArgs | null)[];
    /**
     * Plan/proposal/order fulfilled by this request.
     */
    basedOn?: fhir.ReferenceArgs[] | undefined;
    /**
     * The request takes the place of the referenced completed or terminated request(s).
     */
    replaces?: fhir.ReferenceArgs[] | undefined;
    /**
     * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition. Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
     */
    requisition?: fhir.IdentifierArgs | undefined;
    /**
     * The status is generally fully in the control of the requester - they determine whether the order is draft or active and, after it has been activated, competed, cancelled or suspended. States relating to the activities of the performer are reflected on either the corresponding event (see [Event Pattern](event.html) for general discussion) or using the [Task](task.html) resource.
     */
    status: fhir.FhirCode<RequestStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ServiceRequest.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
     */
    intent: fhir.FhirCode<RequestIntentCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ServiceRequest.intent
     */
    _intent?: fhir.FhirElementArgs;
    /**
     * There may be multiple axis of categorization depending on the context or use case for retrieving or displaying the resource.  The level of granularity is defined by the category concepts in the value set.
     */
    category?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Indicates how quickly the ServiceRequest should be addressed with respect to other requests.
     */
    priority?: fhir.FhirCode<RequestPriorityCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ServiceRequest.priority
     */
    _priority?: fhir.FhirElementArgs;
    /**
     * In general, only the code and timeframe will be present, though occasional additional qualifiers such as body site or even performer could be included to narrow the scope of the prohibition.  If the ServiceRequest.code and ServiceRequest.doNotPerform both contain negation, that will reinforce prohibition and should not have a double negative interpretation.
     */
    doNotPerform?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ServiceRequest.doNotPerform
     */
    _doNotPerform?: fhir.FhirElementArgs;
    /**
     * Many laboratory and radiology procedure codes embed the specimen/organ system in the test order name, for example,  serum or serum/plasma glucose, or a chest x-ray. The specimen might not be recorded separately from the test code.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * For information from the medical record intended to support the delivery of the requested services, use the `supportingInformation` element.
     */
    orderDetail?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * An amount of service being requested which can be a quantity ( for example $1,500 home modification), a ratio ( for example, 20 half day visits per month), or a range (2.0 to 1.8 Gy per fraction).
     */
    quantity?: fhir.Quantity | fhir.Ratio | fhir.Range | undefined;
    /**
     * An amount of service being requested which can be a quantity ( for example $1,500 home modification), a ratio ( for example, 20 half day visits per month), or a range (2.0 to 1.8 Gy per fraction).
     */
    quantityQuantity?: fhir.QuantityArgs | undefined;
    /**
     * An amount of service being requested which can be a quantity ( for example $1,500 home modification), a ratio ( for example, 20 half day visits per month), or a range (2.0 to 1.8 Gy per fraction).
     */
    quantityRatio?: fhir.RatioArgs | undefined;
    /**
     * An amount of service being requested which can be a quantity ( for example $1,500 home modification), a ratio ( for example, 20 half day visits per month), or a range (2.0 to 1.8 Gy per fraction).
     */
    quantityRange?: fhir.RangeArgs | undefined;
    /**
     * On whom or what the service is to be performed. This is usually a human patient, but can also be requested on animals, groups of humans or animals, devices such as dialysis machines, or even locations (typically for environmental scans).
     */
    subject: fhir.ReferenceArgs | null;
    /**
     * An encounter that provides additional information about the healthcare context in which this request is made.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * The date/time at which the requested service should occur.
     */
    occurrence?: fhir.FhirDateTime | fhir.Period | fhir.Timing | undefined;
    /**
     * The date/time at which the requested service should occur.
     */
    occurrenceDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * The date/time at which the requested service should occur.
     */
    occurrencePeriod?: fhir.PeriodArgs | undefined;
    /**
     * The date/time at which the requested service should occur.
     */
    occurrenceTiming?: fhir.TimingArgs | undefined;
    /**
     * If a CodeableConcept is present, it indicates the pre-condition for performing the service.  For example "pain", "on flare-up", etc.
     */
    asNeeded?: fhir.FhirBoolean | fhir.CodeableConcept | undefined;
    /**
     * If a CodeableConcept is present, it indicates the pre-condition for performing the service.  For example "pain", "on flare-up", etc.
     */
    asNeededBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * If a CodeableConcept is present, it indicates the pre-condition for performing the service.  For example "pain", "on flare-up", etc.
     */
    asNeededCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * When the request transitioned to being actionable.
     */
    authoredOn?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: ServiceRequest.authoredOn
     */
    _authoredOn?: fhir.FhirElementArgs;
    /**
     * This not the dispatcher, but rather who is the authorizer.  This element is not intended to handle delegation which would generally be managed through the Provenance resource.
     */
    requester?: fhir.ReferenceArgs | undefined;
    /**
     * This is a  role, not  a participation type.  In other words, does not describe the task but describes the capacity.  For example, “compounding pharmacy”, “psychiatrist” or “internal referral”.
     */
    performerType?: fhir.CodeableConceptArgs | undefined;
    /**
     * If multiple performers are present, it is interpreted as a list of *alternative* performers without any preference regardless of order.  If order of preference is needed use the [request-performerOrder extension](extension-request-performerorder.html).  Use CareTeam to represent a group of performers (for example, Practitioner A *and* Practitioner B).
     */
    performer?: fhir.ReferenceArgs[] | undefined;
    /**
     * The preferred location(s) where the procedure should actually happen in coded or free text form. E.g. at home or nursing day care center.
     */
    locationCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A reference to the the preferred location(s) where the procedure should actually happen. E.g. at home or nursing day care center.
     */
    locationReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * This element represents why the referral is being made and may be used to decide how the service will be performed, or even if it will be performed at all.   Use `CodeableConcept.text` element if the data is free (uncoded) text as shown in the [CT Scan example](servicerequest-example-di.html).
     */
    reasonCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This element represents why the referral is being made and may be used to decide how the service will be performed, or even if it will be performed at all.    To be as specific as possible,  a reference to  *Observation* or *Condition* should be used if available.  Otherwise when referencing  *DiagnosticReport*  it should contain a finding  in `DiagnosticReport.conclusion` and/or `DiagnosticReport.conclusionCode`.   When using a reference to *DocumentReference*, the target document should contain clear findings language providing the relevant reason for this service request.  Use  the CodeableConcept text element in `ServiceRequest.reasonCode` if the data is free (uncoded) text as shown in the [CT Scan example](servicerequest-example-di.html).
     */
    reasonReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be needed for delivering the requested service.
     */
    insurance?: fhir.ReferenceArgs[] | undefined;
    /**
     * To represent information about how the services are to be delivered use the `instructions` element.
     */
    supportingInfo?: fhir.ReferenceArgs[] | undefined;
    /**
     * Many diagnostic procedures need a specimen, but the request itself is not actually about the specimen. This element is for when the diagnostic is requested on already existing specimens and the request points to the specimen it applies to.    Conversely, if the request is entered first with an unknown specimen, then the [Specimen](specimen.html) resource points to the ServiceRequest.
     */
    specimen?: fhir.ReferenceArgs[] | undefined;
    /**
     * Only used if not implicit in the code found in ServiceRequest.code.  If the use case requires BodySite to be handled as a separate resource instead of an inline coded element (e.g. to identify and track separately)  then use the standard extension [procedure-targetBodyStructure](extension-procedure-targetbodystructure.html).
     */
    bodySite?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Any other notes and comments made about the service request. For example, internal billing notes.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * Instructions in terms that are understood by the patient or consumer.
     */
    patientInstruction?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ServiceRequest.patientInstruction
     */
    _patientInstruction?: fhir.FhirElementArgs;
    /**
     * This might not include provenances for all versions of the request – only those deemed “relevant” or important.
     * This SHALL NOT include the Provenance associated with this current version of the resource.  (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update.  Until then, it can be queried directly as the Provenance that points to this version using _revinclude
     * All Provenances should have some historical version of this Request as their subject.
     */
    relevantHistory?: fhir.ReferenceArgs[] | undefined;
}
/**
 * A record of a request for service such as diagnostic investigations, treatments, or operations to be performed.
 */
export declare class ServiceRequest extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "ServiceRequest";
    /**
     * The identifier.type element is used to distinguish between the identifiers assigned by the orderer (known as the 'Placer' in HL7 v2) and the producer of the observations in response to the order (known as the 'Filler' in HL7 v2).  For further discussion and examples see the resource notes section below.
     */
    identifier: fhir.Identifier[];
    /**
     * Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    instantiatesCanonical: fhir.FhirCanonical[];
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri: fhir.FhirUri[];
    /**
     * Plan/proposal/order fulfilled by this request.
     */
    basedOn: fhir.Reference[];
    /**
     * The request takes the place of the referenced completed or terminated request(s).
     */
    replaces: fhir.Reference[];
    /**
     * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition. Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
     */
    requisition?: fhir.Identifier | undefined;
    /**
     * The status is generally fully in the control of the requester - they determine whether the order is draft or active and, after it has been activated, competed, cancelled or suspended. States relating to the activities of the performer are reflected on either the corresponding event (see [Event Pattern](event.html) for general discussion) or using the [Task](task.html) resource.
     */
    status: fhir.FhirCode<RequestStatusCodeType> | null;
    /**
     * This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
     */
    intent: fhir.FhirCode<RequestIntentCodeType> | null;
    /**
     * There may be multiple axis of categorization depending on the context or use case for retrieving or displaying the resource.  The level of granularity is defined by the category concepts in the value set.
     */
    category: fhir.CodeableConcept[];
    /**
     * Indicates how quickly the ServiceRequest should be addressed with respect to other requests.
     */
    priority?: fhir.FhirCode<RequestPriorityCodeType> | undefined;
    /**
     * In general, only the code and timeframe will be present, though occasional additional qualifiers such as body site or even performer could be included to narrow the scope of the prohibition.  If the ServiceRequest.code and ServiceRequest.doNotPerform both contain negation, that will reinforce prohibition and should not have a double negative interpretation.
     */
    doNotPerform?: fhir.FhirBoolean | undefined;
    /**
     * Many laboratory and radiology procedure codes embed the specimen/organ system in the test order name, for example,  serum or serum/plasma glucose, or a chest x-ray. The specimen might not be recorded separately from the test code.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * For information from the medical record intended to support the delivery of the requested services, use the `supportingInformation` element.
     */
    orderDetail: fhir.CodeableConcept[];
    /**
     * An amount of service being requested which can be a quantity ( for example $1,500 home modification), a ratio ( for example, 20 half day visits per month), or a range (2.0 to 1.8 Gy per fraction).
     */
    quantity?: (fhir.Quantity | fhir.Ratio | fhir.Range) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ServiceRequest.quantity[x]
     */
    protected static readonly _fts_quantityIsChoice: true;
    /**
     * On whom or what the service is to be performed. This is usually a human patient, but can also be requested on animals, groups of humans or animals, devices such as dialysis machines, or even locations (typically for environmental scans).
     */
    subject: fhir.Reference | null;
    /**
     * An encounter that provides additional information about the healthcare context in which this request is made.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * The date/time at which the requested service should occur.
     */
    occurrence?: (fhir.FhirDateTime | fhir.Period | fhir.Timing) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ServiceRequest.occurrence[x]
     */
    protected static readonly _fts_occurrenceIsChoice: true;
    /**
     * If a CodeableConcept is present, it indicates the pre-condition for performing the service.  For example "pain", "on flare-up", etc.
     */
    asNeeded?: (fhir.FhirBoolean | fhir.CodeableConcept) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ServiceRequest.asNeeded[x]
     */
    protected static readonly _fts_asNeededIsChoice: true;
    /**
     * When the request transitioned to being actionable.
     */
    authoredOn?: fhir.FhirDateTime | undefined;
    /**
     * This not the dispatcher, but rather who is the authorizer.  This element is not intended to handle delegation which would generally be managed through the Provenance resource.
     */
    requester?: fhir.Reference | undefined;
    /**
     * This is a  role, not  a participation type.  In other words, does not describe the task but describes the capacity.  For example, “compounding pharmacy”, “psychiatrist” or “internal referral”.
     */
    performerType?: fhir.CodeableConcept | undefined;
    /**
     * If multiple performers are present, it is interpreted as a list of *alternative* performers without any preference regardless of order.  If order of preference is needed use the [request-performerOrder extension](extension-request-performerorder.html).  Use CareTeam to represent a group of performers (for example, Practitioner A *and* Practitioner B).
     */
    performer: fhir.Reference[];
    /**
     * The preferred location(s) where the procedure should actually happen in coded or free text form. E.g. at home or nursing day care center.
     */
    locationCode: fhir.CodeableConcept[];
    /**
     * A reference to the the preferred location(s) where the procedure should actually happen. E.g. at home or nursing day care center.
     */
    locationReference: fhir.Reference[];
    /**
     * This element represents why the referral is being made and may be used to decide how the service will be performed, or even if it will be performed at all.   Use `CodeableConcept.text` element if the data is free (uncoded) text as shown in the [CT Scan example](servicerequest-example-di.html).
     */
    reasonCode: fhir.CodeableConcept[];
    /**
     * This element represents why the referral is being made and may be used to decide how the service will be performed, or even if it will be performed at all.    To be as specific as possible,  a reference to  *Observation* or *Condition* should be used if available.  Otherwise when referencing  *DiagnosticReport*  it should contain a finding  in `DiagnosticReport.conclusion` and/or `DiagnosticReport.conclusionCode`.   When using a reference to *DocumentReference*, the target document should contain clear findings language providing the relevant reason for this service request.  Use  the CodeableConcept text element in `ServiceRequest.reasonCode` if the data is free (uncoded) text as shown in the [CT Scan example](servicerequest-example-di.html).
     */
    reasonReference: fhir.Reference[];
    /**
     * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be needed for delivering the requested service.
     */
    insurance: fhir.Reference[];
    /**
     * To represent information about how the services are to be delivered use the `instructions` element.
     */
    supportingInfo: fhir.Reference[];
    /**
     * Many diagnostic procedures need a specimen, but the request itself is not actually about the specimen. This element is for when the diagnostic is requested on already existing specimens and the request points to the specimen it applies to.    Conversely, if the request is entered first with an unknown specimen, then the [Specimen](specimen.html) resource points to the ServiceRequest.
     */
    specimen: fhir.Reference[];
    /**
     * Only used if not implicit in the code found in ServiceRequest.code.  If the use case requires BodySite to be handled as a separate resource instead of an inline coded element (e.g. to identify and track separately)  then use the standard extension [procedure-targetBodyStructure](extension-procedure-targetbodystructure.html).
     */
    bodySite: fhir.CodeableConcept[];
    /**
     * Any other notes and comments made about the service request. For example, internal billing notes.
     */
    note: fhir.Annotation[];
    /**
     * Instructions in terms that are understood by the patient or consumer.
     */
    patientInstruction?: fhir.FhirString | undefined;
    /**
     * This might not include provenances for all versions of the request – only those deemed “relevant” or important.
     * This SHALL NOT include the Provenance associated with this current version of the resource.  (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update.  Until then, it can be queried directly as the Provenance that points to this version using _revinclude
     * All Provenances should have some historical version of this Request as their subject.
     */
    relevantHistory: fhir.Reference[];
    /**
     * Default constructor for ServiceRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ServiceRequestArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (ServiceRequest.status)
     */
    static get statusRequiredCodes(): {
        readonly Active: "active";
        readonly Completed: "completed";
        readonly Draft: "draft";
        readonly EnteredInError: "entered-in-error";
        readonly OnHold: "on-hold";
        readonly Revoked: "revoked";
        readonly Unknown: "unknown";
    };
    /**
     * Required-bound Value Set for intent (ServiceRequest.intent)
     */
    static get intentRequiredCodes(): {
        readonly Directive: "directive";
        readonly FillerOrder: "filler-order";
        readonly InstanceOrder: "instance-order";
        readonly Option: "option";
        readonly Order: "order";
        readonly OriginalOrder: "original-order";
        readonly Plan: "plan";
        readonly Proposal: "proposal";
        readonly ReflexOrder: "reflex-order";
    };
    /**
     * Required-bound Value Set for priority (ServiceRequest.priority)
     */
    static get priorityRequiredCodes(): {
        readonly ASAP: "asap";
        readonly Routine: "routine";
        readonly STAT: "stat";
        readonly Urgent: "urgent";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=ServiceRequest.d.ts.map