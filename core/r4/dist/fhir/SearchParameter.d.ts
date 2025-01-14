import * as fhir from '../fhir.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
import { SearchParamTypeCodeType } from '../fhirValueSets/SearchParamTypeCodes.js';
import { SearchXpathUsageCodeType } from '../fhirValueSets/SearchXpathUsageCodes.js';
import { SearchComparatorCodeType } from '../fhirValueSets/SearchComparatorCodes.js';
import { SearchModifierCodeType } from '../fhirValueSets/SearchModifierCodes.js';
/**
 * Valid arguments for the SearchParameterComponent type.
 */
export interface SearchParameterComponentArgs extends fhir.BackboneElementArgs {
    /**
     * The definition of the search parameter that describes this part.
     */
    definition: fhir.FhirCanonical | string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.component.definition
     */
    _definition?: fhir.FhirElementArgs;
    /**
     * This expression overrides the expression in the definition and extracts the index values from the outcome of the composite expression.
     */
    expression: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.component.expression
     */
    _expression?: fhir.FhirElementArgs;
}
/**
 * Used to define the parts of a composite search parameter.
 */
export declare class SearchParameterComponent extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The definition of the search parameter that describes this part.
     */
    definition: fhir.FhirCanonical | null;
    /**
     * This expression overrides the expression in the definition and extracts the index values from the outcome of the composite expression.
     */
    expression: fhir.FhirString | null;
    /**
     * Default constructor for SearchParameterComponent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SearchParameterComponentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SearchParameter type.
 */
export interface SearchParameterArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "SearchParameter" | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * There may be different search parameter instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the search parameter with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * The intent of this is that a server can designate that it provides support for a search parameter defined in the specification itself (e.g.  [`value-quantity`](http://hl7.org/fhir/SearchParameter/Observation-value-quantity), but detail how it is supported by the server.
     */
    derivedFrom?: fhir.FhirCanonical | string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.derivedFrom
     */
    _derivedFrom?: fhir.FhirElementArgs;
    /**
     * Allows filtering of search parameters that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Allows filtering of search parameters that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.experimental
     */
    _experimental?: fhir.FhirElementArgs;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the search parameter. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the search parameter is the organization or individual primarily responsible for the maintenance and upkeep of the search parameter. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the search parameter. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * This description can be used to capture details such as why the search parameter was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the search parameter as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the search parameter is presumed to be the predominant language in the place the search parameter was created).
     */
    description: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the search parameter to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This element does not describe the usage of the search parameter. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this search parameter.
     */
    purpose?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.purpose
     */
    _purpose?: fhir.FhirElementArgs;
    /**
     * For maximum compatibility, use only lowercase ASCII characters.
     */
    code: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * A search parameter must always apply to at least one resource type. When search parameters apply to more than one resource type, they can be used against any of the listed resource types, or in a cross-type search (see [Cross Resource Search](http.html#xres-search)).
     */
    base: fhir.FhirCode[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.base
     */
    _base?: (fhir.FhirElementArgs | null)[];
    /**
     * The type of value that a search parameter may contain, and how the content is interpreted.
     */
    type: fhir.FhirCode<SearchParamTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * Note that the elements returned by the expression are sometimes complex elements where logic is required to determine quite how to handle them; e.g. CodeableConcepts may contain text and/or multiple codings, where the codings themselves contain a code and a system. For composite search parameters, the outcome of the expression must a collection of base elements from which the composites are derived.
     */
    expression?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.expression
     */
    _expression?: fhir.FhirElementArgs;
    /**
     * Note that the elements returned by the XPath are sometimes complex elements where logic is required to determine quite how to handle them; e.g. CodeableConcepts may contain text and/or multiple codings, where the codings themselves contain a code and a system.
     */
    xpath?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.xpath
     */
    _xpath?: fhir.FhirElementArgs;
    /**
     * How the search parameter relates to the set of elements returned by evaluating the xpath query.
     */
    xpathUsage?: fhir.FhirCode<SearchXpathUsageCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.xpathUsage
     */
    _xpathUsage?: fhir.FhirElementArgs;
    /**
     * Types of resource (if a resource is referenced).
     */
    target?: fhir.FhirCode[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.target
     */
    _target?: (fhir.FhirElementArgs | null)[];
    /**
     * Whether multiple values are allowed for each time the parameter exists. Values are separated by commas, and the parameter matches if any of the values match.
     */
    multipleOr?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.multipleOr
     */
    _multipleOr?: fhir.FhirElementArgs;
    /**
     * Whether multiple parameters are allowed - e.g. more than one parameter with the same name. The search matches if all the parameters match.
     */
    multipleAnd?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.multipleAnd
     */
    _multipleAnd?: fhir.FhirElementArgs;
    /**
     * If no comparators are listed, clients should not expect servers to support any comparators.
     */
    comparator?: fhir.FhirCode<SearchComparatorCodeType>[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.comparator
     */
    _comparator?: (fhir.FhirElementArgs | null)[];
    /**
     * A modifier supported for the search parameter.
     */
    modifier?: fhir.FhirCode<SearchModifierCodeType>[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.modifier
     */
    _modifier?: (fhir.FhirElementArgs | null)[];
    /**
     * Systems are not required to list all the chain names they support, but if they don't list them, clients might not know to use them.
     */
    chain?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.chain
     */
    _chain?: (fhir.FhirElementArgs | null)[];
    /**
     * Used to define the parts of a composite search parameter.
     */
    component?: fhir.SearchParameterComponentArgs[] | undefined;
}
/**
 * A search parameter that defines a named search item that can be used to search/filter on a resource.
 */
export declare class SearchParameter extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "SearchParameter";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: fhir.FhirUri | null;
    /**
     * There may be different search parameter instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the search parameter with the format [url]|[version].
     */
    version?: fhir.FhirString | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: fhir.FhirString | null;
    /**
     * The intent of this is that a server can designate that it provides support for a search parameter defined in the specification itself (e.g.  [`value-quantity`](http://hl7.org/fhir/SearchParameter/Observation-value-quantity), but detail how it is supported by the server.
     */
    derivedFrom?: fhir.FhirCanonical | undefined;
    /**
     * Allows filtering of search parameters that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * Allows filtering of search parameters that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the search parameter. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the search parameter is the organization or individual primarily responsible for the maintenance and upkeep of the search parameter. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the search parameter. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact: fhir.ContactDetail[];
    /**
     * This description can be used to capture details such as why the search parameter was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the search parameter as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the search parameter is presumed to be the predominant language in the place the search parameter was created).
     */
    description: fhir.FhirMarkdown | null;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext: fhir.UsageContext[];
    /**
     * It may be possible for the search parameter to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction: fhir.CodeableConcept[];
    /**
     * This element does not describe the usage of the search parameter. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this search parameter.
     */
    purpose?: fhir.FhirMarkdown | undefined;
    /**
     * For maximum compatibility, use only lowercase ASCII characters.
     */
    code: fhir.FhirCode | null;
    /**
     * A search parameter must always apply to at least one resource type. When search parameters apply to more than one resource type, they can be used against any of the listed resource types, or in a cross-type search (see [Cross Resource Search](http.html#xres-search)).
     */
    base: fhir.FhirCode[];
    /**
     * The type of value that a search parameter may contain, and how the content is interpreted.
     */
    type: fhir.FhirCode<SearchParamTypeCodeType> | null;
    /**
     * Note that the elements returned by the expression are sometimes complex elements where logic is required to determine quite how to handle them; e.g. CodeableConcepts may contain text and/or multiple codings, where the codings themselves contain a code and a system. For composite search parameters, the outcome of the expression must a collection of base elements from which the composites are derived.
     */
    expression?: fhir.FhirString | undefined;
    /**
     * Note that the elements returned by the XPath are sometimes complex elements where logic is required to determine quite how to handle them; e.g. CodeableConcepts may contain text and/or multiple codings, where the codings themselves contain a code and a system.
     */
    xpath?: fhir.FhirString | undefined;
    /**
     * How the search parameter relates to the set of elements returned by evaluating the xpath query.
     */
    xpathUsage?: fhir.FhirCode<SearchXpathUsageCodeType> | undefined;
    /**
     * Types of resource (if a resource is referenced).
     */
    target: fhir.FhirCode[];
    /**
     * Whether multiple values are allowed for each time the parameter exists. Values are separated by commas, and the parameter matches if any of the values match.
     */
    multipleOr?: fhir.FhirBoolean | undefined;
    /**
     * Whether multiple parameters are allowed - e.g. more than one parameter with the same name. The search matches if all the parameters match.
     */
    multipleAnd?: fhir.FhirBoolean | undefined;
    /**
     * If no comparators are listed, clients should not expect servers to support any comparators.
     */
    comparator: fhir.FhirCode<SearchComparatorCodeType>[];
    /**
     * A modifier supported for the search parameter.
     */
    modifier: fhir.FhirCode<SearchModifierCodeType>[];
    /**
     * Systems are not required to list all the chain names they support, but if they don't list them, clients might not know to use them.
     */
    chain: fhir.FhirString[];
    /**
     * Used to define the parts of a composite search parameter.
     */
    component: fhir.SearchParameterComponent[];
    /**
     * Default constructor for SearchParameter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SearchParameterArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (SearchParameter.status)
     */
    static get statusRequiredCodes(): {
        readonly Active: "active";
        readonly Draft: "draft";
        readonly Retired: "retired";
        readonly Unknown: "unknown";
    };
    /**
     * Required-bound Value Set for base (SearchParameter.base)
     */
    static get baseRequiredCodes(): {
        readonly Account: "Account";
        readonly ActivityDefinition: "ActivityDefinition";
        readonly AdverseEvent: "AdverseEvent";
        readonly AllergyIntolerance: "AllergyIntolerance";
        readonly Appointment: "Appointment";
        readonly AppointmentResponse: "AppointmentResponse";
        readonly AuditEvent: "AuditEvent";
        readonly Basic: "Basic";
        readonly Binary: "Binary";
        readonly BiologicallyDerivedProduct: "BiologicallyDerivedProduct";
        readonly BodyStructure: "BodyStructure";
        readonly Bundle: "Bundle";
        readonly CapabilityStatement: "CapabilityStatement";
        readonly CarePlan: "CarePlan";
        readonly CareTeam: "CareTeam";
        readonly CatalogEntry: "CatalogEntry";
        readonly ChargeItem: "ChargeItem";
        readonly ChargeItemDefinition: "ChargeItemDefinition";
        readonly Claim: "Claim";
        readonly ClaimResponse: "ClaimResponse";
        readonly ClinicalImpression: "ClinicalImpression";
        readonly CodeSystem: "CodeSystem";
        readonly Communication: "Communication";
        readonly CommunicationRequest: "CommunicationRequest";
        readonly CompartmentDefinition: "CompartmentDefinition";
        readonly Composition: "Composition";
        readonly ConceptMap: "ConceptMap";
        readonly Condition: "Condition";
        readonly Consent: "Consent";
        readonly Contract: "Contract";
        readonly Coverage: "Coverage";
        readonly CoverageEligibilityRequest: "CoverageEligibilityRequest";
        readonly CoverageEligibilityResponse: "CoverageEligibilityResponse";
        readonly DetectedIssue: "DetectedIssue";
        readonly Device: "Device";
        readonly DeviceDefinition: "DeviceDefinition";
        readonly DeviceMetric: "DeviceMetric";
        readonly DeviceRequest: "DeviceRequest";
        readonly DeviceUseStatement: "DeviceUseStatement";
        readonly DiagnosticReport: "DiagnosticReport";
        readonly DocumentManifest: "DocumentManifest";
        readonly DocumentReference: "DocumentReference";
        readonly DomainResource: "DomainResource";
        readonly EffectEvidenceSynthesis: "EffectEvidenceSynthesis";
        readonly Encounter: "Encounter";
        readonly Endpoint: "Endpoint";
        readonly EnrollmentRequest: "EnrollmentRequest";
        readonly EnrollmentResponse: "EnrollmentResponse";
        readonly EpisodeOfCare: "EpisodeOfCare";
        readonly EventDefinition: "EventDefinition";
        readonly Evidence: "Evidence";
        readonly EvidenceVariable: "EvidenceVariable";
        readonly ExampleScenario: "ExampleScenario";
        readonly ExplanationOfBenefit: "ExplanationOfBenefit";
        readonly FamilyMemberHistory: "FamilyMemberHistory"; /**
         * If no comparators are listed, clients should not expect servers to support any comparators.
         */
        readonly Flag: "Flag";
        readonly Goal: "Goal";
        readonly GraphDefinition: "GraphDefinition";
        readonly Group: "Group";
        readonly GuidanceResponse: "GuidanceResponse";
        readonly HealthcareService: "HealthcareService";
        readonly ImagingStudy: "ImagingStudy";
        readonly Immunization: "Immunization";
        readonly ImmunizationEvaluation: "ImmunizationEvaluation";
        readonly ImmunizationRecommendation: "ImmunizationRecommendation"; /**
         * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
         */
        readonly ImplementationGuide: "ImplementationGuide";
        readonly InsurancePlan: "InsurancePlan";
        readonly Invoice: "Invoice";
        readonly Library: "Library";
        readonly Linkage: "Linkage";
        readonly List: "List";
        readonly Location: "Location";
        readonly Measure: "Measure";
        readonly MeasureReport: "MeasureReport";
        readonly Media: "Media";
        readonly Medication: "Medication";
        readonly MedicationAdministration: "MedicationAdministration";
        readonly MedicationDispense: "MedicationDispense";
        readonly MedicationKnowledge: "MedicationKnowledge";
        readonly MedicationRequest: "MedicationRequest";
        readonly MedicationStatement: "MedicationStatement";
        readonly MedicinalProduct: "MedicinalProduct";
        readonly MedicinalProductAuthorization: "MedicinalProductAuthorization";
        readonly MedicinalProductContraindication: "MedicinalProductContraindication";
        readonly MedicinalProductIndication: "MedicinalProductIndication";
        readonly MedicinalProductIngredient: "MedicinalProductIngredient";
        readonly MedicinalProductInteraction: "MedicinalProductInteraction";
        readonly MedicinalProductManufactured: "MedicinalProductManufactured";
        readonly MedicinalProductPackaged: "MedicinalProductPackaged";
        readonly MedicinalProductPharmaceutical: "MedicinalProductPharmaceutical";
        readonly MedicinalProductUndesirableEffect: "MedicinalProductUndesirableEffect";
        readonly MessageDefinition: "MessageDefinition";
        readonly MessageHeader: "MessageHeader";
        readonly MolecularSequence: "MolecularSequence";
        readonly NamingSystem: "NamingSystem";
        readonly NutritionOrder: "NutritionOrder";
        readonly Observation: "Observation";
        readonly ObservationDefinition: "ObservationDefinition";
        readonly OperationDefinition: "OperationDefinition";
        readonly OperationOutcome: "OperationOutcome";
        readonly Organization: "Organization";
        readonly OrganizationAffiliation: "OrganizationAffiliation";
        readonly Parameters: "Parameters";
        readonly Patient: "Patient";
        readonly PaymentNotice: "PaymentNotice";
        readonly PaymentReconciliation: "PaymentReconciliation";
        readonly Person: "Person";
        readonly PlanDefinition: "PlanDefinition";
        readonly Practitioner: "Practitioner";
        readonly PractitionerRole: "PractitionerRole";
        readonly Procedure: "Procedure";
        readonly Provenance: "Provenance";
        readonly Questionnaire: "Questionnaire";
        readonly QuestionnaireResponse: "QuestionnaireResponse";
        readonly RelatedPerson: "RelatedPerson";
        readonly RequestGroup: "RequestGroup";
        readonly ResearchDefinition: "ResearchDefinition";
        readonly ResearchElementDefinition: "ResearchElementDefinition";
        readonly ResearchStudy: "ResearchStudy";
        readonly ResearchSubject: "ResearchSubject";
        readonly Resource: "Resource";
        readonly RiskAssessment: "RiskAssessment";
        readonly RiskEvidenceSynthesis: "RiskEvidenceSynthesis";
        readonly Schedule: "Schedule";
        readonly SearchParameter: "SearchParameter";
        readonly ServiceRequest: "ServiceRequest";
        readonly Slot: "Slot";
        readonly Specimen: "Specimen";
        readonly SpecimenDefinition: "SpecimenDefinition";
        readonly StructureDefinition: "StructureDefinition";
        readonly StructureMap: "StructureMap";
        readonly Subscription: "Subscription";
        readonly Substance: "Substance";
        readonly SubstanceNucleicAcid: "SubstanceNucleicAcid";
        readonly SubstancePolymer: "SubstancePolymer";
        readonly SubstanceProtein: "SubstanceProtein";
        readonly SubstanceReferenceInformation: "SubstanceReferenceInformation";
        readonly SubstanceSourceMaterial: "SubstanceSourceMaterial";
        readonly SubstanceSpecification: "SubstanceSpecification";
        readonly SupplyDelivery: "SupplyDelivery";
        readonly SupplyRequest: "SupplyRequest";
        readonly Task: "Task";
        readonly TerminologyCapabilities: "TerminologyCapabilities";
        readonly TestReport: "TestReport";
        readonly TestScript: "TestScript";
        readonly ValueSet: "ValueSet";
        readonly VerificationResult: "VerificationResult";
        readonly VisionPrescription: "VisionPrescription";
    };
    /**
     * Required-bound Value Set for type (SearchParameter.type)
     */
    static get typeRequiredCodes(): {
        readonly Composite: "composite";
        readonly DateDateTime: "date";
        readonly Number: "number";
        readonly Quantity: "quantity";
        readonly Reference: "reference";
        readonly Special: "special";
        readonly String: "string";
        readonly Token: "token";
        readonly URI: "uri";
    };
    /**
     * Required-bound Value Set for xpathUsage (SearchParameter.xpathUsage)
     */
    static get xpathUsageRequiredCodes(): {
        readonly Distance: "distance";
        readonly Nearby: "nearby";
        readonly Normal: "normal";
        readonly Other: "other";
        readonly Phonetic: "phonetic";
    };
    /**
     * Required-bound Value Set for target (SearchParameter.target)
     */
    static get targetRequiredCodes(): {
        readonly Account: "Account";
        readonly ActivityDefinition: "ActivityDefinition";
        readonly AdverseEvent: "AdverseEvent";
        readonly AllergyIntolerance: "AllergyIntolerance";
        readonly Appointment: "Appointment";
        readonly AppointmentResponse: "AppointmentResponse";
        readonly AuditEvent: "AuditEvent";
        readonly Basic: "Basic";
        readonly Binary: "Binary";
        readonly BiologicallyDerivedProduct: "BiologicallyDerivedProduct";
        readonly BodyStructure: "BodyStructure";
        readonly Bundle: "Bundle";
        readonly CapabilityStatement: "CapabilityStatement";
        readonly CarePlan: "CarePlan";
        readonly CareTeam: "CareTeam";
        readonly CatalogEntry: "CatalogEntry";
        readonly ChargeItem: "ChargeItem";
        readonly ChargeItemDefinition: "ChargeItemDefinition";
        readonly Claim: "Claim";
        readonly ClaimResponse: "ClaimResponse";
        readonly ClinicalImpression: "ClinicalImpression";
        readonly CodeSystem: "CodeSystem";
        readonly Communication: "Communication";
        readonly CommunicationRequest: "CommunicationRequest";
        readonly CompartmentDefinition: "CompartmentDefinition";
        readonly Composition: "Composition";
        readonly ConceptMap: "ConceptMap";
        readonly Condition: "Condition";
        readonly Consent: "Consent";
        readonly Contract: "Contract";
        readonly Coverage: "Coverage";
        readonly CoverageEligibilityRequest: "CoverageEligibilityRequest";
        readonly CoverageEligibilityResponse: "CoverageEligibilityResponse";
        readonly DetectedIssue: "DetectedIssue";
        readonly Device: "Device";
        readonly DeviceDefinition: "DeviceDefinition";
        readonly DeviceMetric: "DeviceMetric";
        readonly DeviceRequest: "DeviceRequest";
        readonly DeviceUseStatement: "DeviceUseStatement";
        readonly DiagnosticReport: "DiagnosticReport";
        readonly DocumentManifest: "DocumentManifest";
        readonly DocumentReference: "DocumentReference";
        readonly DomainResource: "DomainResource";
        readonly EffectEvidenceSynthesis: "EffectEvidenceSynthesis";
        readonly Encounter: "Encounter";
        readonly Endpoint: "Endpoint";
        readonly EnrollmentRequest: "EnrollmentRequest";
        readonly EnrollmentResponse: "EnrollmentResponse";
        readonly EpisodeOfCare: "EpisodeOfCare";
        readonly EventDefinition: "EventDefinition";
        readonly Evidence: "Evidence";
        readonly EvidenceVariable: "EvidenceVariable";
        readonly ExampleScenario: "ExampleScenario";
        readonly ExplanationOfBenefit: "ExplanationOfBenefit";
        readonly FamilyMemberHistory: "FamilyMemberHistory"; /**
         * If no comparators are listed, clients should not expect servers to support any comparators.
         */
        readonly Flag: "Flag";
        readonly Goal: "Goal";
        readonly GraphDefinition: "GraphDefinition";
        readonly Group: "Group";
        readonly GuidanceResponse: "GuidanceResponse";
        readonly HealthcareService: "HealthcareService";
        readonly ImagingStudy: "ImagingStudy";
        readonly Immunization: "Immunization";
        readonly ImmunizationEvaluation: "ImmunizationEvaluation";
        readonly ImmunizationRecommendation: "ImmunizationRecommendation"; /**
         * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
         */
        readonly ImplementationGuide: "ImplementationGuide";
        readonly InsurancePlan: "InsurancePlan";
        readonly Invoice: "Invoice";
        readonly Library: "Library";
        readonly Linkage: "Linkage";
        readonly List: "List";
        readonly Location: "Location";
        readonly Measure: "Measure";
        readonly MeasureReport: "MeasureReport";
        readonly Media: "Media";
        readonly Medication: "Medication";
        readonly MedicationAdministration: "MedicationAdministration";
        readonly MedicationDispense: "MedicationDispense";
        readonly MedicationKnowledge: "MedicationKnowledge";
        readonly MedicationRequest: "MedicationRequest";
        readonly MedicationStatement: "MedicationStatement";
        readonly MedicinalProduct: "MedicinalProduct";
        readonly MedicinalProductAuthorization: "MedicinalProductAuthorization";
        readonly MedicinalProductContraindication: "MedicinalProductContraindication";
        readonly MedicinalProductIndication: "MedicinalProductIndication";
        readonly MedicinalProductIngredient: "MedicinalProductIngredient";
        readonly MedicinalProductInteraction: "MedicinalProductInteraction";
        readonly MedicinalProductManufactured: "MedicinalProductManufactured";
        readonly MedicinalProductPackaged: "MedicinalProductPackaged";
        readonly MedicinalProductPharmaceutical: "MedicinalProductPharmaceutical";
        readonly MedicinalProductUndesirableEffect: "MedicinalProductUndesirableEffect";
        readonly MessageDefinition: "MessageDefinition";
        readonly MessageHeader: "MessageHeader";
        readonly MolecularSequence: "MolecularSequence";
        readonly NamingSystem: "NamingSystem";
        readonly NutritionOrder: "NutritionOrder";
        readonly Observation: "Observation";
        readonly ObservationDefinition: "ObservationDefinition";
        readonly OperationDefinition: "OperationDefinition";
        readonly OperationOutcome: "OperationOutcome";
        readonly Organization: "Organization";
        readonly OrganizationAffiliation: "OrganizationAffiliation";
        readonly Parameters: "Parameters";
        readonly Patient: "Patient";
        readonly PaymentNotice: "PaymentNotice";
        readonly PaymentReconciliation: "PaymentReconciliation";
        readonly Person: "Person";
        readonly PlanDefinition: "PlanDefinition";
        readonly Practitioner: "Practitioner";
        readonly PractitionerRole: "PractitionerRole";
        readonly Procedure: "Procedure";
        readonly Provenance: "Provenance";
        readonly Questionnaire: "Questionnaire";
        readonly QuestionnaireResponse: "QuestionnaireResponse";
        readonly RelatedPerson: "RelatedPerson";
        readonly RequestGroup: "RequestGroup";
        readonly ResearchDefinition: "ResearchDefinition";
        readonly ResearchElementDefinition: "ResearchElementDefinition";
        readonly ResearchStudy: "ResearchStudy";
        readonly ResearchSubject: "ResearchSubject";
        readonly Resource: "Resource";
        readonly RiskAssessment: "RiskAssessment";
        readonly RiskEvidenceSynthesis: "RiskEvidenceSynthesis";
        readonly Schedule: "Schedule";
        readonly SearchParameter: "SearchParameter";
        readonly ServiceRequest: "ServiceRequest";
        readonly Slot: "Slot";
        readonly Specimen: "Specimen";
        readonly SpecimenDefinition: "SpecimenDefinition";
        readonly StructureDefinition: "StructureDefinition";
        readonly StructureMap: "StructureMap";
        readonly Subscription: "Subscription";
        readonly Substance: "Substance";
        readonly SubstanceNucleicAcid: "SubstanceNucleicAcid";
        readonly SubstancePolymer: "SubstancePolymer";
        readonly SubstanceProtein: "SubstanceProtein";
        readonly SubstanceReferenceInformation: "SubstanceReferenceInformation";
        readonly SubstanceSourceMaterial: "SubstanceSourceMaterial";
        readonly SubstanceSpecification: "SubstanceSpecification";
        readonly SupplyDelivery: "SupplyDelivery";
        readonly SupplyRequest: "SupplyRequest";
        readonly Task: "Task";
        readonly TerminologyCapabilities: "TerminologyCapabilities";
        readonly TestReport: "TestReport";
        readonly TestScript: "TestScript";
        readonly ValueSet: "ValueSet";
        readonly VerificationResult: "VerificationResult";
        readonly VisionPrescription: "VisionPrescription";
    };
    /**
     * Required-bound Value Set for comparator (SearchParameter.comparator)
     */
    static get comparatorRequiredCodes(): {
        readonly Approximately: "ap";
        readonly EndsBefore: "eb";
        readonly Equals: "eq";
        readonly GreaterOrEquals: "ge";
        readonly GreaterThan: "gt";
        readonly LessOfEqual: "le";
        readonly LessThan: "lt";
        readonly NotEquals: "ne";
        readonly StartsAfter: "sa";
    };
    /**
     * Required-bound Value Set for modifier (SearchParameter.modifier)
     */
    static get modifierRequiredCodes(): {
        readonly Above: "above";
        readonly Below: "below";
        readonly Contains: "contains";
        readonly Exact: "exact";
        readonly Identifier: "identifier";
        readonly In: "in";
        readonly Missing: "missing";
        readonly Not: "not";
        readonly NotIn: "not-in";
        readonly OfType: "ofType";
        readonly Text: "text";
        readonly Type: "type";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=SearchParameter.d.ts.map