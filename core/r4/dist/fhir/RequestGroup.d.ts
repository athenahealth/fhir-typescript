import * as fhir from '../fhir.js';
import { ActionConditionKindCodeType } from '../fhirValueSets/ActionConditionKindCodes.js';
import { ActionRelationshipTypeCodeType } from '../fhirValueSets/ActionRelationshipTypeCodes.js';
import { RequestPriorityCodeType } from '../fhirValueSets/RequestPriorityCodes.js';
import { ActionTypeCodingType } from '../fhirValueSets/ActionTypeCodings.js';
import { ActionGroupingBehaviorCodeType } from '../fhirValueSets/ActionGroupingBehaviorCodes.js';
import { ActionSelectionBehaviorCodeType } from '../fhirValueSets/ActionSelectionBehaviorCodes.js';
import { ActionRequiredBehaviorCodeType } from '../fhirValueSets/ActionRequiredBehaviorCodes.js';
import { ActionPrecheckBehaviorCodeType } from '../fhirValueSets/ActionPrecheckBehaviorCodes.js';
import { ActionCardinalityBehaviorCodeType } from '../fhirValueSets/ActionCardinalityBehaviorCodes.js';
import { RequestStatusCodeType } from '../fhirValueSets/RequestStatusCodes.js';
import { RequestIntentCodeType } from '../fhirValueSets/RequestIntentCodes.js';
/**
 * Valid arguments for the RequestGroupActionCondition type.
 */
export interface RequestGroupActionConditionArgs extends fhir.BackboneElementArgs {
    /**
     * Applicability criteria are used to determine immediate applicability when a plan definition is applied to a given context. Start and stop criteria are carried through application and used to describe enter/exit criteria for an action.
     */
    kind: fhir.FhirCode<ActionConditionKindCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.condition.kind
     */
    _kind?: fhir.FhirElementArgs;
    /**
     * The expression may be inlined, or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression?: fhir.ExpressionArgs | undefined;
}
/**
 * When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all of the conditions are true.
 */
export declare class RequestGroupActionCondition extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Applicability criteria are used to determine immediate applicability when a plan definition is applied to a given context. Start and stop criteria are carried through application and used to describe enter/exit criteria for an action.
     */
    kind: fhir.FhirCode<ActionConditionKindCodeType> | null;
    /**
     * The expression may be inlined, or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression?: fhir.Expression | undefined;
    /**
     * Default constructor for RequestGroupActionCondition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<RequestGroupActionConditionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for kind (RequestGroup.action.condition.kind)
     */
    static get kindRequiredCodes(): {
        readonly Applicability: "applicability";
        readonly Start: "start";
        readonly Stop: "stop";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the RequestGroupActionRelatedAction type.
 */
export interface RequestGroupActionRelatedActionArgs extends fhir.BackboneElementArgs {
    /**
     * The element id of the action this is related to.
     */
    actionId: fhir.FhirId | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.relatedAction.actionId
     */
    _actionId?: fhir.FhirElementArgs;
    /**
     * The relationship of this action to the related action.
     */
    relationship: fhir.FhirCode<ActionRelationshipTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.relatedAction.relationship
     */
    _relationship?: fhir.FhirElementArgs;
    /**
     * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
     */
    offset?: fhir.Duration | fhir.Range | undefined;
    /**
     * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
     */
    offsetDuration?: fhir.DurationArgs | undefined;
    /**
     * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
     */
    offsetRange?: fhir.RangeArgs | undefined;
}
/**
 * A relationship to another action such as "before" or "30-60 minutes after start of".
 */
export declare class RequestGroupActionRelatedAction extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The element id of the action this is related to.
     */
    actionId: fhir.FhirId | null;
    /**
     * The relationship of this action to the related action.
     */
    relationship: fhir.FhirCode<ActionRelationshipTypeCodeType> | null;
    /**
     * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
     */
    offset?: (fhir.Duration | fhir.Range) | undefined;
    /**
     * Internal flag to properly serialize choice-type element RequestGroup.action.relatedAction.offset[x]
     */
    protected static readonly _fts_offsetIsChoice: true;
    /**
     * Default constructor for RequestGroupActionRelatedAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<RequestGroupActionRelatedActionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for relationship (RequestGroup.action.relatedAction.relationship)
     */
    static get relationshipRequiredCodes(): {
        readonly After: "after";
        readonly AfterEnd: "after-end";
        readonly AfterStart: "after-start";
        readonly Before: "before";
        readonly BeforeEnd: "before-end";
        readonly BeforeStart: "before-start";
        readonly Concurrent: "concurrent";
        readonly ConcurrentWithEnd: "concurrent-with-end";
        readonly ConcurrentWithStart: "concurrent-with-start";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the RequestGroupAction type.
 */
export interface RequestGroupActionArgs extends fhir.BackboneElementArgs {
    /**
     * A user-visible prefix for the action.
     */
    prefix?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.prefix
     */
    _prefix?: fhir.FhirElementArgs;
    /**
     * The title of the action displayed to a user.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * A short description of the action used to provide a summary to display to the user.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that might not be capable of interpreting it dynamically.
     */
    textEquivalent?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.textEquivalent
     */
    _textEquivalent?: fhir.FhirElementArgs;
    /**
     * Indicates how quickly the action should be addressed with respect to other actions.
     */
    priority?: fhir.FhirCode<RequestPriorityCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.priority
     */
    _priority?: fhir.FhirElementArgs;
    /**
     * A code that provides meaning for the action or action group. For example, a section may have a LOINC code for a section of a documentation template.
     */
    code?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.
     */
    documentation?: fhir.RelatedArtifactArgs[] | undefined;
    /**
     * When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all of the conditions are true.
     */
    condition?: fhir.RequestGroupActionConditionArgs[] | undefined;
    /**
     * A relationship to another action such as "before" or "30-60 minutes after start of".
     */
    relatedAction?: fhir.RequestGroupActionRelatedActionArgs[] | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timing?: fhir.FhirDateTime | fhir.Age | fhir.Period | fhir.Duration | fhir.Range | fhir.Timing | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingAge?: fhir.AgeArgs | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingPeriod?: fhir.PeriodArgs | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingDuration?: fhir.DurationArgs | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingRange?: fhir.RangeArgs | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingTiming?: fhir.TimingArgs | undefined;
    /**
     * The participant that should perform or be responsible for this action.
     */
    participant?: fhir.ReferenceArgs[] | undefined;
    /**
     * The type of action to perform (create, update, remove).
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Defines the grouping behavior for the action and its children.
     */
    groupingBehavior?: fhir.FhirCode<ActionGroupingBehaviorCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.groupingBehavior
     */
    _groupingBehavior?: fhir.FhirElementArgs;
    /**
     * Defines the selection behavior for the action and its children.
     */
    selectionBehavior?: fhir.FhirCode<ActionSelectionBehaviorCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.selectionBehavior
     */
    _selectionBehavior?: fhir.FhirElementArgs;
    /**
     * Defines expectations around whether an action is required.
     */
    requiredBehavior?: fhir.FhirCode<ActionRequiredBehaviorCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.requiredBehavior
     */
    _requiredBehavior?: fhir.FhirElementArgs;
    /**
     * Defines whether the action should usually be preselected.
     */
    precheckBehavior?: fhir.FhirCode<ActionPrecheckBehaviorCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.precheckBehavior
     */
    _precheckBehavior?: fhir.FhirElementArgs;
    /**
     * Defines whether the action can be selected multiple times.
     */
    cardinalityBehavior?: fhir.FhirCode<ActionCardinalityBehaviorCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.cardinalityBehavior
     */
    _cardinalityBehavior?: fhir.FhirElementArgs;
    /**
     * The target resource SHALL be a [Request](request.html) resource with a Request.intent set to "option".
     */
    resource?: fhir.ReferenceArgs | undefined;
    /**
     * Sub actions.
     */
    action?: fhir.RequestGroupActionArgs[] | undefined;
}
/**
 * The actions, if any, produced by the evaluation of the artifact.
 */
export declare class RequestGroupAction extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A user-visible prefix for the action.
     */
    prefix?: fhir.FhirString | undefined;
    /**
     * The title of the action displayed to a user.
     */
    title?: fhir.FhirString | undefined;
    /**
     * A short description of the action used to provide a summary to display to the user.
     */
    description?: fhir.FhirString | undefined;
    /**
     * A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that might not be capable of interpreting it dynamically.
     */
    textEquivalent?: fhir.FhirString | undefined;
    /**
     * Indicates how quickly the action should be addressed with respect to other actions.
     */
    priority?: fhir.FhirCode<RequestPriorityCodeType> | undefined;
    /**
     * A code that provides meaning for the action or action group. For example, a section may have a LOINC code for a section of a documentation template.
     */
    code: fhir.CodeableConcept[];
    /**
     * Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.
     */
    documentation: fhir.RelatedArtifact[];
    /**
     * When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all of the conditions are true.
     */
    condition: fhir.RequestGroupActionCondition[];
    /**
     * A relationship to another action such as "before" or "30-60 minutes after start of".
     */
    relatedAction: fhir.RequestGroupActionRelatedAction[];
    /**
     * An optional value describing when the action should be performed.
     */
    timing?: (fhir.FhirDateTime | fhir.Age | fhir.Period | fhir.Duration | fhir.Range | fhir.Timing) | undefined;
    /**
     * Internal flag to properly serialize choice-type element RequestGroup.action.timing[x]
     */
    protected static readonly _fts_timingIsChoice: true;
    /**
     * The participant that should perform or be responsible for this action.
     */
    participant: fhir.Reference[];
    /**
     * The type of action to perform (create, update, remove).
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Defines the grouping behavior for the action and its children.
     */
    groupingBehavior?: fhir.FhirCode<ActionGroupingBehaviorCodeType> | undefined;
    /**
     * Defines the selection behavior for the action and its children.
     */
    selectionBehavior?: fhir.FhirCode<ActionSelectionBehaviorCodeType> | undefined;
    /**
     * Defines expectations around whether an action is required.
     */
    requiredBehavior?: fhir.FhirCode<ActionRequiredBehaviorCodeType> | undefined;
    /**
     * Defines whether the action should usually be preselected.
     */
    precheckBehavior?: fhir.FhirCode<ActionPrecheckBehaviorCodeType> | undefined;
    /**
     * Defines whether the action can be selected multiple times.
     */
    cardinalityBehavior?: fhir.FhirCode<ActionCardinalityBehaviorCodeType> | undefined;
    /**
     * The target resource SHALL be a [Request](request.html) resource with a Request.intent set to "option".
     */
    resource?: fhir.Reference | undefined;
    /**
     * Sub actions.
     */
    action: fhir.RequestGroupAction[];
    /**
     * Default constructor for RequestGroupAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<RequestGroupActionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for priority (RequestGroup.action.priority)
     */
    static get priorityRequiredCodes(): {
        readonly ASAP: "asap";
        readonly Routine: "routine";
        readonly STAT: "stat";
        readonly Urgent: "urgent";
    };
    /**
     * Extensible-bound Value Set for type (RequestGroup.action.type)
     */
    static get typeExtensibleCodings(): ActionTypeCodingType;
    /**
     * Required-bound Value Set for groupingBehavior (RequestGroup.action.groupingBehavior)
     */
    static get groupingBehaviorRequiredCodes(): {
        readonly LogicalGroup: "logical-group";
        readonly SentenceGroup: "sentence-group";
        readonly VisualGroup: "visual-group";
    };
    /**
     * Required-bound Value Set for selectionBehavior (RequestGroup.action.selectionBehavior)
     */
    static get selectionBehaviorRequiredCodes(): {
        readonly All: "all";
        readonly AllOrNone: "all-or-none";
        readonly Any: "any";
        readonly AtMostOne: "at-most-one";
        readonly ExactlyOne: "exactly-one";
        readonly OneOrMore: "one-or-more";
    };
    /**
     * Required-bound Value Set for requiredBehavior (RequestGroup.action.requiredBehavior)
     */
    static get requiredBehaviorRequiredCodes(): {
        readonly Could: "could";
        readonly Must: "must";
        readonly MustUnlessDocumented: "must-unless-documented";
    };
    /**
     * Required-bound Value Set for precheckBehavior (RequestGroup.action.precheckBehavior)
     */
    static get precheckBehaviorRequiredCodes(): {
        readonly No: "no";
        readonly Yes: "yes";
    };
    /**
     * Required-bound Value Set for cardinalityBehavior (RequestGroup.action.cardinalityBehavior)
     */
    static get cardinalityBehaviorRequiredCodes(): {
        readonly Multiple: "multiple";
        readonly Single: "single";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the RequestGroup type.
 */
export interface RequestGroupArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "RequestGroup" | undefined;
    /**
     * Allows a service to provide a unique, business identifier for the request.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * A canonical URL referencing a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
     */
    instantiatesCanonical?: fhir.FhirCanonical[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.instantiatesCanonical
     */
    _instantiatesCanonical?: (fhir.FhirElementArgs | null)[];
    /**
     * A URL referencing an externally defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
     */
    instantiatesUri?: fhir.FhirUri[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.instantiatesUri
     */
    _instantiatesUri?: (fhir.FhirElementArgs | null)[];
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this request.
     */
    basedOn?: fhir.ReferenceArgs[] | undefined;
    /**
     * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
     */
    replaces?: fhir.ReferenceArgs[] | undefined;
    /**
     * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition.  Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
     */
    groupIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * The current state of the request. For request groups, the status reflects the status of all the requests in the group.
     */
    status: fhir.FhirCode<RequestStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Indicates the level of authority/intentionality associated with the request and where the request fits into the workflow chain.
     */
    intent: fhir.FhirCode<RequestIntentCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.intent
     */
    _intent?: fhir.FhirElementArgs;
    /**
     * Indicates how quickly the request should be addressed with respect to other requests.
     */
    priority?: fhir.FhirCode<RequestPriorityCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.priority
     */
    _priority?: fhir.FhirElementArgs;
    /**
     * This element can be used to provide a code that captures the meaning of the request group as a whole, as opposed to the code of the action element, which captures the meaning of the individual actions within the request group.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * The subject for which the request group was created.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * Describes the context of the request group, if any.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * Indicates when the request group was created.
     */
    authoredOn?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.authoredOn
     */
    _authoredOn?: fhir.FhirElementArgs;
    /**
     * Provides a reference to the author of the request group.
     */
    author?: fhir.ReferenceArgs | undefined;
    /**
     * Describes the reason for the request group in coded or textual form.
     */
    reasonCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Indicates another resource whose existence justifies this request group.
     */
    reasonReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * Provides a mechanism to communicate additional information about the response.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * The actions, if any, produced by the evaluation of the artifact.
     */
    action?: fhir.RequestGroupActionArgs[] | undefined;
}
/**
 * A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one".
 */
export declare class RequestGroup extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "RequestGroup";
    /**
     * Allows a service to provide a unique, business identifier for the request.
     */
    identifier: fhir.Identifier[];
    /**
     * A canonical URL referencing a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
     */
    instantiatesCanonical: fhir.FhirCanonical[];
    /**
     * A URL referencing an externally defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
     */
    instantiatesUri: fhir.FhirUri[];
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this request.
     */
    basedOn: fhir.Reference[];
    /**
     * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
     */
    replaces: fhir.Reference[];
    /**
     * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition.  Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
     */
    groupIdentifier?: fhir.Identifier | undefined;
    /**
     * The current state of the request. For request groups, the status reflects the status of all the requests in the group.
     */
    status: fhir.FhirCode<RequestStatusCodeType> | null;
    /**
     * Indicates the level of authority/intentionality associated with the request and where the request fits into the workflow chain.
     */
    intent: fhir.FhirCode<RequestIntentCodeType> | null;
    /**
     * Indicates how quickly the request should be addressed with respect to other requests.
     */
    priority?: fhir.FhirCode<RequestPriorityCodeType> | undefined;
    /**
     * This element can be used to provide a code that captures the meaning of the request group as a whole, as opposed to the code of the action element, which captures the meaning of the individual actions within the request group.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The subject for which the request group was created.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Describes the context of the request group, if any.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Indicates when the request group was created.
     */
    authoredOn?: fhir.FhirDateTime | undefined;
    /**
     * Provides a reference to the author of the request group.
     */
    author?: fhir.Reference | undefined;
    /**
     * Describes the reason for the request group in coded or textual form.
     */
    reasonCode: fhir.CodeableConcept[];
    /**
     * Indicates another resource whose existence justifies this request group.
     */
    reasonReference: fhir.Reference[];
    /**
     * Provides a mechanism to communicate additional information about the response.
     */
    note: fhir.Annotation[];
    /**
     * The actions, if any, produced by the evaluation of the artifact.
     */
    action: fhir.RequestGroupAction[];
    /**
     * Default constructor for RequestGroup - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<RequestGroupArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (RequestGroup.status)
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
     * Required-bound Value Set for intent (RequestGroup.intent)
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
     * Required-bound Value Set for priority (RequestGroup.priority)
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
//# sourceMappingURL=RequestGroup.d.ts.map