// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: QuestionnaireResponse

import * as fhir from '../fhir.js';

// @ts-ignore
import { QuestionnaireAnswersStatusCodings, QuestionnaireAnswersStatusCodingType,} from '../fhirValueSets/QuestionnaireAnswersStatusCodings.js';
// @ts-ignore
import { QuestionnaireAnswersStatusCodes,  QuestionnaireAnswersStatusCodeType } from '../fhirValueSets/QuestionnaireAnswersStatusCodes.js';
/**
 * Valid arguments for the QuestionnaireResponseItemAnswer type.
 */
export interface QuestionnaireResponseItemAnswerArgs extends fhir.BackboneElementArgs {
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  value?: fhir.FhirBoolean|fhir.FhirDecimal|fhir.FhirInteger|fhir.FhirDate|fhir.FhirDateTime|fhir.FhirTime|fhir.FhirString|fhir.FhirUri|fhir.Attachment|fhir.Coding|fhir.Quantity|fhir.Reference|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueBoolean?: fhir.FhirBoolean|boolean|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueDecimal?: fhir.FhirDecimal|number|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueInteger?: fhir.FhirInteger|number|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueDate?: fhir.FhirDate|string|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueTime?: fhir.FhirTime|string|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueString?: fhir.FhirString|string|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueUri?: fhir.FhirUri|string|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueAttachment?: fhir.AttachmentArgs|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueCoding?: fhir.CodingArgs|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueQuantity?: fhir.QuantityArgs|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueReference?: fhir.ReferenceArgs|undefined;
  /**
   * Nested groups and/or questions found within this particular answer.
   */
  item?: fhir.QuestionnaireResponseItemArgs[]|undefined;
}

/**
 * The value is nested because we cannot have a repeating structure that has variable type.
 */
export class QuestionnaireResponseItemAnswer extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'QuestionnaireResponseItemAnswer';
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  public value?: (fhir.FhirBoolean|fhir.FhirDecimal|fhir.FhirInteger|fhir.FhirDate|fhir.FhirDateTime|fhir.FhirTime|fhir.FhirString|fhir.FhirUri|fhir.Attachment|fhir.Coding|fhir.Quantity|fhir.Reference)|undefined;
  /**
   * Internal flag to properly serialize choice-type element QuestionnaireResponse.item.answer.value[x]
   */
  protected static readonly _fts_valueIsChoice:true = true;
  /**
   * Nested groups and/or questions found within this particular answer.
   */
  public item: fhir.QuestionnaireResponseItem[];
  /**
   * Default constructor for QuestionnaireResponseItemAnswer - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<QuestionnaireResponseItemAnswerArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['value']) { this.value = source.value; }
    else if (source['valueBoolean']) { this.value = new fhir.FhirBoolean({value: source.valueBoolean}); }
    else if (source['valueDecimal']) { this.value = new fhir.FhirDecimal({value: source.valueDecimal}); }
    else if (source['valueInteger']) { this.value = new fhir.FhirInteger({value: source.valueInteger}); }
    else if (source['valueDate']) { this.value = new fhir.FhirDate({value: source.valueDate}); }
    else if (source['valueDateTime']) { this.value = new fhir.FhirDateTime({value: source.valueDateTime}); }
    else if (source['valueTime']) { this.value = new fhir.FhirTime({value: source.valueTime}); }
    else if (source['valueString']) { this.value = new fhir.FhirString({value: source.valueString}); }
    else if (source['valueUri']) { this.value = new fhir.FhirUri({value: source.valueUri}); }
    else if (source['valueAttachment']) { this.value = new fhir.Attachment(source.valueAttachment); }
    else if (source['valueCoding']) { this.value = new fhir.Coding(source.valueCoding); }
    else if (source['valueQuantity']) { this.value = new fhir.Quantity(source.valueQuantity); }
    else if (source['valueReference']) { this.value = new fhir.Reference(source.valueReference); }
    if (source['item']) { this.item = source.item.map((x) => new fhir.QuestionnaireResponseItem(x)); }
    else { this.item = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'QuestionnaireResponse.item.answer' }
    if (this["item"]) { this.item.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.item[${i}]`)); }) }
    return issues;
  }
}
/**
 * Valid arguments for the QuestionnaireResponseItem type.
 */
export interface QuestionnaireResponseItemArgs extends fhir.BackboneElementArgs {
  /**
   * The item from the Questionnaire that corresponds to this item in the QuestionnaireResponse resource.
   */
  linkId: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.item.linkId
   */
  _linkId?:fhir.FhirElementArgs;
  /**
   * The ElementDefinition must be in a [StructureDefinition](structuredefinition.html#), and must have a fragment identifier that identifies the specific data element by its id (Element.id). E.g. http://hl7.org/fhir/StructureDefinition/Observation#Observation.value[x].
   * There is no need for this element if the item pointed to by the linkId has a definition listed.
   */
  definition?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.item.definition
   */
  _definition?:fhir.FhirElementArgs;
  /**
   * Text that is displayed above the contents of the group or as the text of the question being answered.
   */
  text?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.item.text
   */
  _text?:fhir.FhirElementArgs;
  /**
   * The value is nested because we cannot have a repeating structure that has variable type.
   */
  answer?: fhir.QuestionnaireResponseItemAnswerArgs[]|undefined;
  /**
   * Questions or sub-groups nested beneath a question or group.
   */
  item?: fhir.QuestionnaireResponseItemArgs[]|undefined;
}

/**
 * Groups cannot have answers and therefore must nest directly within item. When dealing with questions, nesting must occur within each answer because some questions may have multiple answers (and the nesting occurs for each answer).
 */
export class QuestionnaireResponseItem extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'QuestionnaireResponseItem';
  /**
   * The item from the Questionnaire that corresponds to this item in the QuestionnaireResponse resource.
   */
  public linkId: fhir.FhirString|null;
  /**
   * The ElementDefinition must be in a [StructureDefinition](structuredefinition.html#), and must have a fragment identifier that identifies the specific data element by its id (Element.id). E.g. http://hl7.org/fhir/StructureDefinition/Observation#Observation.value[x].
   * There is no need for this element if the item pointed to by the linkId has a definition listed.
   */
  public definition?: fhir.FhirUri|undefined;
  /**
   * Text that is displayed above the contents of the group or as the text of the question being answered.
   */
  public text?: fhir.FhirString|undefined;
  /**
   * The value is nested because we cannot have a repeating structure that has variable type.
   */
  public answer: fhir.QuestionnaireResponseItemAnswer[];
  /**
   * Questions or sub-groups nested beneath a question or group.
   */
  public item: fhir.QuestionnaireResponseItem[];
  /**
   * Default constructor for QuestionnaireResponseItem - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<QuestionnaireResponseItemArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['linkId']) { this.linkId = new fhir.FhirString({value: source.linkId}); }
    else { this.linkId = null; }
    if (source['_linkId']) {
      if (this.linkId) { this.linkId.addExtendedProperties(source._linkId!); }
      else { this.linkId = new fhir.FhirString(source._linkId as Partial<fhir.FhirStringArgs>); }
    }
    if (source['definition']) { this.definition = new fhir.FhirUri({value: source.definition}); }
    if (source['_definition']) {
      if (this.definition) { this.definition.addExtendedProperties(source._definition!); }
      else { this.definition = new fhir.FhirUri(source._definition as Partial<fhir.FhirUriArgs>); }
    }
    if (source['text']) { this.text = new fhir.FhirString({value: source.text}); }
    if (source['_text']) {
      if (this.text) { this.text.addExtendedProperties(source._text!); }
      else { this.text = new fhir.FhirString(source._text as Partial<fhir.FhirStringArgs>); }
    }
    if (source['answer']) { this.answer = source.answer.map((x) => new fhir.QuestionnaireResponseItemAnswer(x)); }
    else { this.answer = []; }
    if (source['item']) { this.item = source.item.map((x) => new fhir.QuestionnaireResponseItem(x)); }
    else { this.item = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'QuestionnaireResponse.item' }
    if (!this['linkId']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property linkId fhir: QuestionnaireResponse.item.linkId:string', expression: [expression] });
    }
    if (this["linkId"]) { issues.push(...this.linkId.doModelValidation(expression+'.linkId')); }
    if (this["definition"]) { issues.push(...this.definition.doModelValidation(expression+'.definition')); }
    if (this["text"]) { issues.push(...this.text.doModelValidation(expression+'.text')); }
    if (this["answer"]) { this.answer.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.answer[${i}]`)); }) }
    if (this["item"]) { this.item.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.item[${i}]`)); }) }
    return issues;
  }
}
/**
 * Valid arguments for the QuestionnaireResponse type.
 */
export interface QuestionnaireResponseArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "QuestionnaireResponse"|undefined;
  /**
   * A business identifier assigned to a particular completed (or partially completed) questionnaire.
   */
  identifier?: fhir.IdentifierArgs|undefined;
  /**
   * The order, proposal or plan that is fulfilled in whole or in part by this QuestionnaireResponse.  For example, a ServiceRequest seeking an intake assessment or a decision support recommendation to assess for post-partum depression.
   */
  basedOn?: fhir.ReferenceArgs[]|undefined;
  /**
   * Composition of questionnaire responses will be handled by the parent questionnaire having answers that reference the child questionnaire.  For relationships to referrals, and other types of requests, use basedOn.
   */
  partOf?: fhir.ReferenceArgs[]|undefined;
  /**
   * If a QuestionnaireResponse references a Questionnaire, then the QuestionnaireResponse structure must be consistent with the Questionnaire (i.e. questions must be organized into the same groups, nested questions must still be nested, etc.).
   */
  questionnaire?: fhir.FhirCanonical|string|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.questionnaire
   */
  _questionnaire?:fhir.FhirElementArgs;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: fhir.FhirCode<QuestionnaireAnswersStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * If the Questionnaire declared a subjectType, the resource pointed to by this element must be an instance of one of the listed types.
   */
  subject?: fhir.ReferenceArgs|undefined;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter. A questionnaire that was initiated during an encounter but not fully completed during the encounter would still generally be associated with the encounter.
   */
  encounter?: fhir.ReferenceArgs|undefined;
  /**
   * May be different from the lastUpdateTime of the resource itself, because that reflects when the data was known to the server, not when the data was captured.
   * This element is optional to allow for systems that might not know the value, however it SHOULD be populated if possible.
   */
  authored?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.authored
   */
  _authored?:fhir.FhirElementArgs;
  /**
   * Mapping a subject's answers to multiple choice options and determining what to put in the textual answer is a matter of interpretation.  Authoring by device would indicate that some portion of the questionnaire had been auto-populated.
   */
  author?: fhir.ReferenceArgs|undefined;
  /**
   * If not specified, no inference can be made about who provided the data.
   */
  source?: fhir.ReferenceArgs|undefined;
  /**
   * Groups cannot have answers and therefore must nest directly within item. When dealing with questions, nesting must occur within each answer because some questions may have multiple answers (and the nesting occurs for each answer).
   */
  item?: fhir.QuestionnaireResponseItemArgs[]|undefined;
}

/**
 * A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to.
 */
export class QuestionnaireResponse extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'QuestionnaireResponse';
  /**
   * Resource Type Name
   */
  public override resourceType: "QuestionnaireResponse";
  /**
   * A business identifier assigned to a particular completed (or partially completed) questionnaire.
   */
  public identifier?: fhir.Identifier|undefined;
  /**
   * The order, proposal or plan that is fulfilled in whole or in part by this QuestionnaireResponse.  For example, a ServiceRequest seeking an intake assessment or a decision support recommendation to assess for post-partum depression.
   */
  public basedOn: fhir.Reference[];
  /**
   * Composition of questionnaire responses will be handled by the parent questionnaire having answers that reference the child questionnaire.  For relationships to referrals, and other types of requests, use basedOn.
   */
  public partOf: fhir.Reference[];
  /**
   * If a QuestionnaireResponse references a Questionnaire, then the QuestionnaireResponse structure must be consistent with the Questionnaire (i.e. questions must be organized into the same groups, nested questions must still be nested, etc.).
   */
  public questionnaire?: fhir.FhirCanonical|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: fhir.FhirCode<QuestionnaireAnswersStatusCodeType>|null;
  /**
   * If the Questionnaire declared a subjectType, the resource pointed to by this element must be an instance of one of the listed types.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter. A questionnaire that was initiated during an encounter but not fully completed during the encounter would still generally be associated with the encounter.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * May be different from the lastUpdateTime of the resource itself, because that reflects when the data was known to the server, not when the data was captured.
   * This element is optional to allow for systems that might not know the value, however it SHOULD be populated if possible.
   */
  public authored?: fhir.FhirDateTime|undefined;
  /**
   * Mapping a subject's answers to multiple choice options and determining what to put in the textual answer is a matter of interpretation.  Authoring by device would indicate that some portion of the questionnaire had been auto-populated.
   */
  public author?: fhir.Reference|undefined;
  /**
   * If not specified, no inference can be made about who provided the data.
   */
  public source?: fhir.Reference|undefined;
  /**
   * Groups cannot have answers and therefore must nest directly within item. When dealing with questions, nesting must occur within each answer because some questions may have multiple answers (and the nesting occurs for each answer).
   */
  public item: fhir.QuestionnaireResponseItem[];
  /**
   * Default constructor for QuestionnaireResponse - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<QuestionnaireResponseArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'QuestionnaireResponse';
    if (source['identifier']) { this.identifier = new fhir.Identifier(source.identifier); }
    if (source['basedOn']) { this.basedOn = source.basedOn.map((x) => new fhir.Reference(x)); }
    else { this.basedOn = []; }
    if (source['partOf']) { this.partOf = source.partOf.map((x) => new fhir.Reference(x)); }
    else { this.partOf = []; }
    if (source['questionnaire']) { this.questionnaire = new fhir.FhirCanonical({value: source.questionnaire}); }
    if (source['_questionnaire']) {
      if (this.questionnaire) { this.questionnaire.addExtendedProperties(source._questionnaire!); }
      else { this.questionnaire = new fhir.FhirCanonical(source._questionnaire as Partial<fhir.FhirCanonicalArgs>); }
    }
    if (source['status']) { this.status = new fhir.FhirCode<QuestionnaireAnswersStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<QuestionnaireAnswersStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter); }
    if (source['authored']) { this.authored = new fhir.FhirDateTime({value: source.authored}); }
    if (source['_authored']) {
      if (this.authored) { this.authored.addExtendedProperties(source._authored!); }
      else { this.authored = new fhir.FhirDateTime(source._authored as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['author']) { this.author = new fhir.Reference(source.author); }
    if (source['source']) { this.source = new fhir.Reference(source.source); }
    if (source['item']) { this.item = source.item.map((x) => new fhir.QuestionnaireResponseItem(x)); }
    else { this.item = []; }
  }
  /**
   * Required-bound Value Set for status (QuestionnaireResponse.status)
   */
  public static get statusRequiredCodes() {
    return QuestionnaireAnswersStatusCodes;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'QuestionnaireResponse' }
    if (!this['resourceType']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType fhir: QuestionnaireResponse.resourceType:"QuestionnaireResponse"', expression: [expression] });
    }
    if (this["identifier"]) { issues.push(...this.identifier.doModelValidation(expression+'.identifier')); }
    if (this["basedOn"]) { this.basedOn.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.basedOn[${i}]`)); }) }
    if (this["partOf"]) { this.partOf.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.partOf[${i}]`)); }) }
    if (this["questionnaire"]) { issues.push(...this.questionnaire.doModelValidation(expression+'.questionnaire')); }
    if (!this['status']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property status fhir: QuestionnaireResponse.status:code', expression: [expression] });
    }
    if (this['status'] && (!Object.values(QuestionnaireAnswersStatusCodes).includes(this.status.value as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'status (QuestionnaireResponse.status) of type code is missing code for Required binding to: QuestionnaireAnswersStatus', expression: [expression] });
    }
    if (this["status"]) { issues.push(...this.status.doModelValidation(expression+'.status')); }
    if (this["subject"]) { issues.push(...this.subject.doModelValidation(expression+'.subject')); }
    if (this["encounter"]) { issues.push(...this.encounter.doModelValidation(expression+'.encounter')); }
    if (this["authored"]) { issues.push(...this.authored.doModelValidation(expression+'.authored')); }
    if (this["author"]) { issues.push(...this.author.doModelValidation(expression+'.author')); }
    if (this["source"]) { issues.push(...this.source.doModelValidation(expression+'.source')); }
    if (this["item"]) { this.item.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.item[${i}]`)); }) }
    return issues;
  }
}
