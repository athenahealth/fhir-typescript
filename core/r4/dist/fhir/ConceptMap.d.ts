import * as fhir from '../fhir.js';
import { ConceptMapEquivalenceCodeType } from '../fhirValueSets/ConceptMapEquivalenceCodes.js';
import { ConceptmapUnmappedModeCodeType } from '../fhirValueSets/ConceptmapUnmappedModeCodes.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
/**
 * Valid arguments for the ConceptMapGroupElementTargetDependsOn type.
 */
export interface ConceptMapGroupElementTargetDependsOnArgs extends fhir.BackboneElementArgs {
    /**
     * A reference to an element that holds a coded value that corresponds to a code system property. The idea is that the information model carries an element somewhere that is labeled to correspond with a code system property.
     */
    property: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.element.target.dependsOn.property
     */
    _property?: fhir.FhirElementArgs;
    /**
     * An absolute URI that identifies the code system of the dependency code (if the source/dependency is a value set that crosses code systems).
     */
    system?: fhir.FhirCanonical | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.element.target.dependsOn.system
     */
    _system?: fhir.FhirElementArgs;
    /**
     * Identity (code or path) or the element/item/ValueSet/text that the map depends on / refers to.
     */
    value: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.element.target.dependsOn.value
     */
    _value?: fhir.FhirElementArgs;
    /**
     * The display is ignored when processing the map.
     */
    display?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.element.target.dependsOn.display
     */
    _display?: fhir.FhirElementArgs;
}
/**
 * A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.
 */
export declare class ConceptMapGroupElementTargetDependsOn extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A reference to an element that holds a coded value that corresponds to a code system property. The idea is that the information model carries an element somewhere that is labeled to correspond with a code system property.
     */
    property: fhir.FhirUri | null;
    /**
     * An absolute URI that identifies the code system of the dependency code (if the source/dependency is a value set that crosses code systems).
     */
    system?: fhir.FhirCanonical | undefined;
    /**
     * Identity (code or path) or the element/item/ValueSet/text that the map depends on / refers to.
     */
    value: fhir.FhirString | null;
    /**
     * The display is ignored when processing the map.
     */
    display?: fhir.FhirString | undefined;
    /**
     * Default constructor for ConceptMapGroupElementTargetDependsOn - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConceptMapGroupElementTargetDependsOnArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ConceptMapGroupElementTarget type.
 */
export interface ConceptMapGroupElementTargetArgs extends fhir.BackboneElementArgs {
    /**
     * Identity (code or path) or the element/item that the map refers to.
     */
    code?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.element.target.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * The display is ignored when processing the map.
     */
    display?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.element.target.display
     */
    _display?: fhir.FhirElementArgs;
    /**
     * This element is labeled as a modifier because it may indicate that a target does not apply.
     */
    equivalence: fhir.FhirCode<ConceptMapEquivalenceCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.element.target.equivalence
     */
    _equivalence?: fhir.FhirElementArgs;
    /**
     * A description of status/issues in mapping that conveys additional information not represented in  the structured data.
     */
    comment?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.element.target.comment
     */
    _comment?: fhir.FhirElementArgs;
    /**
     * A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.
     */
    dependsOn?: fhir.ConceptMapGroupElementTargetDependsOnArgs[] | undefined;
    /**
     * A set of additional outcomes from this mapping to other elements. To properly execute this mapping, the specified element must be mapped to some data element or source that is in context. The mapping may still be useful without a place for the additional data elements, but the equivalence cannot be relied on.
     */
    product?: fhir.ConceptMapGroupElementTargetDependsOnArgs[] | undefined;
}
/**
 * Ideally there would only be one map, with equal or equivalent mapping. But multiple maps are allowed for several narrower options, or to assert that other concepts are unmatched.
 */
export declare class ConceptMapGroupElementTarget extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Identity (code or path) or the element/item that the map refers to.
     */
    code?: fhir.FhirCode | undefined;
    /**
     * The display is ignored when processing the map.
     */
    display?: fhir.FhirString | undefined;
    /**
     * This element is labeled as a modifier because it may indicate that a target does not apply.
     */
    equivalence: fhir.FhirCode<ConceptMapEquivalenceCodeType> | null;
    /**
     * A description of status/issues in mapping that conveys additional information not represented in  the structured data.
     */
    comment?: fhir.FhirString | undefined;
    /**
     * A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.
     */
    dependsOn: fhir.ConceptMapGroupElementTargetDependsOn[];
    /**
     * A set of additional outcomes from this mapping to other elements. To properly execute this mapping, the specified element must be mapped to some data element or source that is in context. The mapping may still be useful without a place for the additional data elements, but the equivalence cannot be relied on.
     */
    product: fhir.ConceptMapGroupElementTargetDependsOn[];
    /**
     * Default constructor for ConceptMapGroupElementTarget - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConceptMapGroupElementTargetArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for equivalence (ConceptMap.group.element.target.equivalence)
     */
    static get equivalenceRequiredCodes(): {
        readonly Disjoint: "disjoint";
        readonly Equal: "equal";
        readonly Equivalent: "equivalent";
        readonly Inexact: "inexact";
        readonly Narrower: "narrower";
        readonly RelatedTo: "relatedto";
        readonly Specializes: "specializes";
        readonly Subsumes: "subsumes";
        readonly Unmatched: "unmatched";
        readonly Wider: "wider";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ConceptMapGroupElement type.
 */
export interface ConceptMapGroupElementArgs extends fhir.BackboneElementArgs {
    /**
     * Identity (code or path) or the element/item being mapped.
     */
    code?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.element.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * The display is ignored when processing the map.
     */
    display?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.element.display
     */
    _display?: fhir.FhirElementArgs;
    /**
     * Ideally there would only be one map, with equal or equivalent mapping. But multiple maps are allowed for several narrower options, or to assert that other concepts are unmatched.
     */
    target?: fhir.ConceptMapGroupElementTargetArgs[] | undefined;
}
/**
 * Generally, the ideal is that there would only be one mapping for each concept in the source value set, but a given concept may be mapped multiple times with different comments or dependencies.
 */
export declare class ConceptMapGroupElement extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Identity (code or path) or the element/item being mapped.
     */
    code?: fhir.FhirCode | undefined;
    /**
     * The display is ignored when processing the map.
     */
    display?: fhir.FhirString | undefined;
    /**
     * Ideally there would only be one map, with equal or equivalent mapping. But multiple maps are allowed for several narrower options, or to assert that other concepts are unmatched.
     */
    target: fhir.ConceptMapGroupElementTarget[];
    /**
     * Default constructor for ConceptMapGroupElement - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConceptMapGroupElementArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ConceptMapGroupUnmapped type.
 */
export interface ConceptMapGroupUnmappedArgs extends fhir.BackboneElementArgs {
    /**
     * Defines which action to take if there is no match for the source concept in the target system designated for the group. One of 3 actions are possible: use the unmapped code (this is useful when doing a mapping between versions, and only a few codes have changed), use a fixed code (a default code), or alternatively, a reference to a different concept map can be provided (by canonical URL).
     */
    mode: fhir.FhirCode<ConceptmapUnmappedModeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.unmapped.mode
     */
    _mode?: fhir.FhirElementArgs;
    /**
     * The fixed code to use when the mode = 'fixed'  - all unmapped codes are mapped to a single fixed code.
     */
    code?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.unmapped.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * The display is ignored when processing the map.
     */
    display?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.unmapped.display
     */
    _display?: fhir.FhirElementArgs;
    /**
     * The canonical reference to an additional ConceptMap resource instance to use for mapping if this ConceptMap resource contains no matching mapping for the source concept.
     */
    url?: fhir.FhirCanonical | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.unmapped.url
     */
    _url?: fhir.FhirElementArgs;
}
/**
 * This only applies if the source code has a system value that matches the system defined for the group.
 */
export declare class ConceptMapGroupUnmapped extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Defines which action to take if there is no match for the source concept in the target system designated for the group. One of 3 actions are possible: use the unmapped code (this is useful when doing a mapping between versions, and only a few codes have changed), use a fixed code (a default code), or alternatively, a reference to a different concept map can be provided (by canonical URL).
     */
    mode: fhir.FhirCode<ConceptmapUnmappedModeCodeType> | null;
    /**
     * The fixed code to use when the mode = 'fixed'  - all unmapped codes are mapped to a single fixed code.
     */
    code?: fhir.FhirCode | undefined;
    /**
     * The display is ignored when processing the map.
     */
    display?: fhir.FhirString | undefined;
    /**
     * The canonical reference to an additional ConceptMap resource instance to use for mapping if this ConceptMap resource contains no matching mapping for the source concept.
     */
    url?: fhir.FhirCanonical | undefined;
    /**
     * Default constructor for ConceptMapGroupUnmapped - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConceptMapGroupUnmappedArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for mode (ConceptMap.group.unmapped.mode)
     */
    static get modeRequiredCodes(): {
        readonly FixedCode: "fixed";
        readonly OtherMap: "other-map";
        readonly ProvidedCode: "provided";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ConceptMapGroup type.
 */
export interface ConceptMapGroupArgs extends fhir.BackboneElementArgs {
    /**
     * This is not needed if the source value set is specified and it contains concepts from only a single system.
     */
    source?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.source
     */
    _source?: fhir.FhirElementArgs;
    /**
     * The specification of a particular code system version may be required for code systems which lack concept permanence.
     */
    sourceVersion?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.sourceVersion
     */
    _sourceVersion?: fhir.FhirElementArgs;
    /**
     * This is not needed if the target value set is specified and it contains concepts from only a single system. The group target may also be omitted if all of the target element equivalence values are 'unmatched'.
     */
    target?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.target
     */
    _target?: fhir.FhirElementArgs;
    /**
     * The specification of a particular code system version may be required for code systems which lack concept permanence.
     */
    targetVersion?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.targetVersion
     */
    _targetVersion?: fhir.FhirElementArgs;
    /**
     * Generally, the ideal is that there would only be one mapping for each concept in the source value set, but a given concept may be mapped multiple times with different comments or dependencies.
     */
    element: fhir.ConceptMapGroupElementArgs[] | null;
    /**
     * This only applies if the source code has a system value that matches the system defined for the group.
     */
    unmapped?: fhir.ConceptMapGroupUnmappedArgs | undefined;
}
/**
 * A group of mappings that all have the same source and target system.
 */
export declare class ConceptMapGroup extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * This is not needed if the source value set is specified and it contains concepts from only a single system.
     */
    source?: fhir.FhirUri | undefined;
    /**
     * The specification of a particular code system version may be required for code systems which lack concept permanence.
     */
    sourceVersion?: fhir.FhirString | undefined;
    /**
     * This is not needed if the target value set is specified and it contains concepts from only a single system. The group target may also be omitted if all of the target element equivalence values are 'unmatched'.
     */
    target?: fhir.FhirUri | undefined;
    /**
     * The specification of a particular code system version may be required for code systems which lack concept permanence.
     */
    targetVersion?: fhir.FhirString | undefined;
    /**
     * Generally, the ideal is that there would only be one mapping for each concept in the source value set, but a given concept may be mapped multiple times with different comments or dependencies.
     */
    element: fhir.ConceptMapGroupElement[];
    /**
     * This only applies if the source code has a system value that matches the system defined for the group.
     */
    unmapped?: fhir.ConceptMapGroupUnmapped | undefined;
    /**
     * Default constructor for ConceptMapGroup - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConceptMapGroupArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ConceptMap type.
 */
export interface ConceptMapArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "ConceptMap" | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this concept map outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * There may be different concept map instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the concept map with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * Allows filtering of concept maps that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Allows filtering of concept maps that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.experimental
     */
    _experimental?: fhir.FhirElementArgs;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the concept map. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the concept map is the organization or individual primarily responsible for the maintenance and upkeep of the concept map. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the concept map. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * The description is not intended to describe the semantics of the concept map. The description should capture its intended use, which is needed for ensuring integrity for its use in models across future changes.
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the concept map to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This element does not describe the usage of the concept map. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this concept map.
     */
    purpose?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.purpose
     */
    _purpose?: fhir.FhirElementArgs;
    /**
     * Frequently the copyright differs between the concept map and codes that are included. The copyright statement should clearly differentiate between these when required.
     */
    copyright?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.copyright
     */
    _copyright?: fhir.FhirElementArgs;
    /**
     * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, there is no specified context for the map (not recommended).  The source value set may select codes from either an explicit (standard or local) or implicit code system.
     */
    source?: fhir.FhirUri | fhir.FhirCanonical | undefined;
    /**
     * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, there is no specified context for the map (not recommended).  The source value set may select codes from either an explicit (standard or local) or implicit code system.
     */
    sourceUri?: fhir.FhirUri | string | undefined;
    /**
     * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, there is no specified context for the map (not recommended).  The source value set may select codes from either an explicit (standard or local) or implicit code system.
     */
    sourceCanonical?: fhir.FhirCanonical | string | undefined;
    /**
     * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, the is no specified context for the map.
     */
    target?: fhir.FhirUri | fhir.FhirCanonical | undefined;
    /**
     * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, the is no specified context for the map.
     */
    targetUri?: fhir.FhirUri | string | undefined;
    /**
     * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, the is no specified context for the map.
     */
    targetCanonical?: fhir.FhirCanonical | string | undefined;
    /**
     * A group of mappings that all have the same source and target system.
     */
    group?: fhir.ConceptMapGroupArgs[] | undefined;
}
/**
 * A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models.
 */
export declare class ConceptMap extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "ConceptMap";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this concept map outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * There may be different concept map instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the concept map with the format [url]|[version].
     */
    version?: fhir.FhirString | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: fhir.FhirString | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | undefined;
    /**
     * Allows filtering of concept maps that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * Allows filtering of concept maps that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the concept map. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the concept map is the organization or individual primarily responsible for the maintenance and upkeep of the concept map. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the concept map. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact: fhir.ContactDetail[];
    /**
     * The description is not intended to describe the semantics of the concept map. The description should capture its intended use, which is needed for ensuring integrity for its use in models across future changes.
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext: fhir.UsageContext[];
    /**
     * It may be possible for the concept map to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction: fhir.CodeableConcept[];
    /**
     * This element does not describe the usage of the concept map. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this concept map.
     */
    purpose?: fhir.FhirMarkdown | undefined;
    /**
     * Frequently the copyright differs between the concept map and codes that are included. The copyright statement should clearly differentiate between these when required.
     */
    copyright?: fhir.FhirMarkdown | undefined;
    /**
     * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, there is no specified context for the map (not recommended).  The source value set may select codes from either an explicit (standard or local) or implicit code system.
     */
    source?: (fhir.FhirUri | fhir.FhirCanonical) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ConceptMap.source[x]
     */
    protected static readonly _fts_sourceIsChoice: true;
    /**
     * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, the is no specified context for the map.
     */
    target?: (fhir.FhirUri | fhir.FhirCanonical) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ConceptMap.target[x]
     */
    protected static readonly _fts_targetIsChoice: true;
    /**
     * A group of mappings that all have the same source and target system.
     */
    group: fhir.ConceptMapGroup[];
    /**
     * Default constructor for ConceptMap - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConceptMapArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (ConceptMap.status)
     */
    static get statusRequiredCodes(): {
        readonly Active: "active";
        readonly Draft: "draft";
        readonly Retired: "retired";
        readonly Unknown: "unknown";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=ConceptMap.d.ts.map