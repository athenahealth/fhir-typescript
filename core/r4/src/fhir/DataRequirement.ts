// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: DataRequirement

import * as fhir from '../fhir.js';

// @ts-ignore
import { SortDirectionCodings, SortDirectionCodingType,} from '../fhirValueSets/SortDirectionCodings.js';
// @ts-ignore
import { SortDirectionCodes,  SortDirectionCodeType } from '../fhirValueSets/SortDirectionCodes.js';
// @ts-ignore
import { AllTypesCodings, AllTypesCodingType,} from '../fhirValueSets/AllTypesCodings.js';
// @ts-ignore
import { AllTypesCodes,  AllTypesCodeType } from '../fhirValueSets/AllTypesCodes.js';
/**
 * Valid arguments for the DataRequirementCodeFilter type.
 */
export interface DataRequirementCodeFilterArgs extends fhir.FhirElementArgs {
  /**
   * The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
   */
  path?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: DataRequirement.codeFilter.path
   */
  _path?:fhir.FhirElementArgs;
  /**
   * A token parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type code, Coding, or CodeableConcept.
   */
  searchParam?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: DataRequirement.codeFilter.searchParam
   */
  _searchParam?:fhir.FhirElementArgs;
  /**
   * The valueset for the code filter. The valueSet and code elements are additive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.
   */
  valueSet?: fhir.FhirCanonical|string|undefined;
  /**
   * Extended properties for primitive element: DataRequirement.codeFilter.valueSet
   */
  _valueSet?:fhir.FhirElementArgs;
  /**
   * The codes for the code filter. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified codes. If codes are specified in addition to a value set, the filter returns items matching a code in the value set or one of the specified codes.
   */
  code?: fhir.CodingArgs[]|undefined;
}

/**
 * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.
 */
export class DataRequirementCodeFilter extends fhir.FhirElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DataRequirementCodeFilter';
  /**
   * The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
   */
  public path?: fhir.FhirString|undefined;
  /**
   * A token parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type code, Coding, or CodeableConcept.
   */
  public searchParam?: fhir.FhirString|undefined;
  /**
   * The valueset for the code filter. The valueSet and code elements are additive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.
   */
  public valueSet?: fhir.FhirCanonical|undefined;
  /**
   * The codes for the code filter. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified codes. If codes are specified in addition to a value set, the filter returns items matching a code in the value set or one of the specified codes.
   */
  public code: fhir.Coding[];
  /**
   * Default constructor for DataRequirementCodeFilter - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DataRequirementCodeFilterArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['path']) { this.path = new fhir.FhirString({value: source.path}); }
    if (source['_path']) {
      if (this.path) { this.path.addExtendedProperties(source._path!); }
      else { this.path = new fhir.FhirString(source._path as Partial<fhir.FhirStringArgs>); }
    }
    if (source['searchParam']) { this.searchParam = new fhir.FhirString({value: source.searchParam}); }
    if (source['_searchParam']) {
      if (this.searchParam) { this.searchParam.addExtendedProperties(source._searchParam!); }
      else { this.searchParam = new fhir.FhirString(source._searchParam as Partial<fhir.FhirStringArgs>); }
    }
    if (source['valueSet']) { this.valueSet = new fhir.FhirCanonical({value: source.valueSet}); }
    if (source['_valueSet']) {
      if (this.valueSet) { this.valueSet.addExtendedProperties(source._valueSet!); }
      else { this.valueSet = new fhir.FhirCanonical(source._valueSet as Partial<fhir.FhirCanonicalArgs>); }
    }
    if (source['code']) { this.code = source.code.map((x) => new fhir.Coding(x)); }
    else { this.code = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'DataRequirement.codeFilter' }
    if (this["path"]) { issues.push(...this.path.doModelValidation(expression+'.path')); }
    if (this["searchParam"]) { issues.push(...this.searchParam.doModelValidation(expression+'.searchParam')); }
    if (this["valueSet"]) { issues.push(...this.valueSet.doModelValidation(expression+'.valueSet')); }
    if (this["code"]) { this.code.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.code[${i}]`)); }) }
    return issues;
  }
}
/**
 * Valid arguments for the DataRequirementDateFilter type.
 */
export interface DataRequirementDateFilterArgs extends fhir.FhirElementArgs {
  /**
   * The path attribute contains a [Simple FHIR Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
   */
  path?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: DataRequirement.dateFilter.path
   */
  _path?:fhir.FhirElementArgs;
  /**
   * A date parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type date, dateTime, Period, Schedule, or Timing.
   */
  searchParam?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: DataRequirement.dateFilter.searchParam
   */
  _searchParam?:fhir.FhirElementArgs;
  /**
   * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
   */
  value?: fhir.FhirDateTime|fhir.Period|fhir.Duration|undefined;
  /**
   * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
   */
  valueDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
   */
  valuePeriod?: fhir.PeriodArgs|undefined;
  /**
   * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
   */
  valueDuration?: fhir.DurationArgs|undefined;
}

/**
 * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.
 */
export class DataRequirementDateFilter extends fhir.FhirElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DataRequirementDateFilter';
  /**
   * The path attribute contains a [Simple FHIR Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
   */
  public path?: fhir.FhirString|undefined;
  /**
   * A date parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type date, dateTime, Period, Schedule, or Timing.
   */
  public searchParam?: fhir.FhirString|undefined;
  /**
   * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
   */
  public value?: (fhir.FhirDateTime|fhir.Period|fhir.Duration)|undefined;
  /**
   * Internal flag to properly serialize choice-type element DataRequirement.dateFilter.value[x]
   */
  protected static readonly _fts_valueIsChoice:true = true;
  /**
   * Default constructor for DataRequirementDateFilter - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DataRequirementDateFilterArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['path']) { this.path = new fhir.FhirString({value: source.path}); }
    if (source['_path']) {
      if (this.path) { this.path.addExtendedProperties(source._path!); }
      else { this.path = new fhir.FhirString(source._path as Partial<fhir.FhirStringArgs>); }
    }
    if (source['searchParam']) { this.searchParam = new fhir.FhirString({value: source.searchParam}); }
    if (source['_searchParam']) {
      if (this.searchParam) { this.searchParam.addExtendedProperties(source._searchParam!); }
      else { this.searchParam = new fhir.FhirString(source._searchParam as Partial<fhir.FhirStringArgs>); }
    }
    if (source['value']) { this.value = source.value; }
    else if (source['valueDateTime']) { this.value = new fhir.FhirDateTime({value: source.valueDateTime}); }
    else if (source['valuePeriod']) { this.value = new fhir.Period(source.valuePeriod); }
    else if (source['valueDuration']) { this.value = new fhir.Duration(source.valueDuration); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'DataRequirement.dateFilter' }
    if (this["path"]) { issues.push(...this.path.doModelValidation(expression+'.path')); }
    if (this["searchParam"]) { issues.push(...this.searchParam.doModelValidation(expression+'.searchParam')); }
    return issues;
  }
}
/**
 * Valid arguments for the DataRequirementSort type.
 */
export interface DataRequirementSortArgs extends fhir.FhirElementArgs {
  /**
   * The attribute of the sort. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant.
   */
  path: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: DataRequirement.sort.path
   */
  _path?:fhir.FhirElementArgs;
  /**
   * The direction of the sort, ascending or descending.
   */
  direction: fhir.FhirCode<SortDirectionCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: DataRequirement.sort.direction
   */
  _direction?:fhir.FhirElementArgs;
}

/**
 * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5". When multiple sorts are specified, they are applied in the order they appear in the resource.
 */
export class DataRequirementSort extends fhir.FhirElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DataRequirementSort';
  /**
   * The attribute of the sort. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant.
   */
  public path: fhir.FhirString|null;
  /**
   * The direction of the sort, ascending or descending.
   */
  public direction: fhir.FhirCode<SortDirectionCodeType>|null;
  /**
   * Default constructor for DataRequirementSort - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DataRequirementSortArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['path']) { this.path = new fhir.FhirString({value: source.path}); }
    else { this.path = null; }
    if (source['_path']) {
      if (this.path) { this.path.addExtendedProperties(source._path!); }
      else { this.path = new fhir.FhirString(source._path as Partial<fhir.FhirStringArgs>); }
    }
    if (source['direction']) { this.direction = new fhir.FhirCode<SortDirectionCodeType>({value: source.direction}); }
    else { this.direction = null; }
    if (source['_direction']) {
      if (this.direction) { this.direction.addExtendedProperties(source._direction!); }
      else { this.direction = new fhir.FhirCode<SortDirectionCodeType>(source._direction as Partial<fhir.FhirCode>); }
    }
  }
  /**
   * Required-bound Value Set for direction (DataRequirement.sort.direction)
   */
  public static get directionRequiredCodes() {
    return SortDirectionCodes;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'DataRequirement.sort' }
    if (!this['path']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property path fhir: DataRequirement.sort.path:string', expression: [expression] });
    }
    if (this["path"]) { issues.push(...this.path.doModelValidation(expression+'.path')); }
    if (!this['direction']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property direction fhir: DataRequirement.sort.direction:code', expression: [expression] });
    }
    if (this['direction'] && (!Object.values(SortDirectionCodes).includes(this.direction.value as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'direction (DataRequirement.sort.direction) of type code is missing code for Required binding to: SortDirection', expression: [expression] });
    }
    if (this["direction"]) { issues.push(...this.direction.doModelValidation(expression+'.direction')); }
    return issues;
  }
}
/**
 * Valid arguments for the DataRequirement type.
 */
export interface DataRequirementArgs extends fhir.FhirElementArgs {
  /**
   * The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile.
   */
  type: fhir.FhirCode|string|undefined;
  /**
   * Extended properties for primitive element: DataRequirement.type
   */
  _type?:fhir.FhirElementArgs;
  /**
   * The profile of the required data, specified as the uri of the profile definition.
   */
  profile?: fhir.FhirCanonical[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: DataRequirement.profile
   */
  _profile?:(fhir.FhirElementArgs|null)[];
  /**
   * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
   */
  subject?: fhir.CodeableConcept|fhir.Reference|undefined;
  /**
   * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
   */
  subjectCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
   */
  subjectReference?: fhir.ReferenceArgs|undefined;
  /**
   * Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available. 
   * The value of mustSupport SHALL be a FHIRPath resolveable on the type of the DataRequirement. The path SHALL consist only of identifiers, constant indexers, and .resolve() (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).
   */
  mustSupport?: fhir.FhirString[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: DataRequirement.mustSupport
   */
  _mustSupport?:(fhir.FhirElementArgs|null)[];
  /**
   * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.
   */
  codeFilter?: fhir.DataRequirementCodeFilterArgs[]|undefined;
  /**
   * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.
   */
  dateFilter?: fhir.DataRequirementDateFilterArgs[]|undefined;
  /**
   * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5".
   */
  limit?: fhir.FhirPositiveInt|number|undefined;
  /**
   * Extended properties for primitive element: DataRequirement.limit
   */
  _limit?:fhir.FhirElementArgs;
  /**
   * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5". When multiple sorts are specified, they are applied in the order they appear in the resource.
   */
  sort?: fhir.DataRequirementSortArgs[]|undefined;
}

/**
 * Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.
 */
export class DataRequirement extends fhir.FhirElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DataRequirement';
  /**
   * The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile.
   */
  public type: fhir.FhirCode|null;
  /**
   * The profile of the required data, specified as the uri of the profile definition.
   */
  public profile: fhir.FhirCanonical[];
  /**
   * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
   */
  public subject?: (fhir.CodeableConcept|fhir.Reference)|undefined;
  /**
   * Internal flag to properly serialize choice-type element DataRequirement.subject[x]
   */
  protected static readonly _fts_subjectIsChoice:true = true;
  /**
   * Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available. 
   * The value of mustSupport SHALL be a FHIRPath resolveable on the type of the DataRequirement. The path SHALL consist only of identifiers, constant indexers, and .resolve() (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).
   */
  public mustSupport: fhir.FhirString[];
  /**
   * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.
   */
  public codeFilter: fhir.DataRequirementCodeFilter[];
  /**
   * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.
   */
  public dateFilter: fhir.DataRequirementDateFilter[];
  /**
   * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5".
   */
  public limit?: fhir.FhirPositiveInt|undefined;
  /**
   * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5". When multiple sorts are specified, they are applied in the order they appear in the resource.
   */
  public sort: fhir.DataRequirementSort[];
  /**
   * Default constructor for DataRequirement - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DataRequirementArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.FhirCode({value: source.type}); }
    else { this.type = null; }
    if (source['_type']) {
      if (this.type) { this.type.addExtendedProperties(source._type!); }
      else { this.type = new fhir.FhirCode(source._type as Partial<fhir.FhirCodeArgs>); }
    }
    if (source['profile']) { this.profile = source.profile.map((x) => new fhir.FhirCanonical({value: x})); }
    else { this.profile = []; }
    if (source['_profile']) {
      source._profile.forEach((x,i) => {
        if (this.profile.length >= i) { if (x) { this.profile[i].addExtendedProperties(x); } }
        else { if (x) { this.profile.push(new fhir.FhirCanonical(x as Partial<fhir.FhirCanonicalArgs>)); } }
      });
    }
    if (source['subject']) { this.subject = source.subject; }
    else if (source['subjectCodeableConcept']) { this.subject = new fhir.CodeableConcept(source.subjectCodeableConcept); }
    else if (source['subjectReference']) { this.subject = new fhir.Reference(source.subjectReference); }
    if (source['mustSupport']) { this.mustSupport = source.mustSupport.map((x) => new fhir.FhirString({value: x})); }
    else { this.mustSupport = []; }
    if (source['_mustSupport']) {
      source._mustSupport.forEach((x,i) => {
        if (this.mustSupport.length >= i) { if (x) { this.mustSupport[i].addExtendedProperties(x); } }
        else { if (x) { this.mustSupport.push(new fhir.FhirString(x as Partial<fhir.FhirStringArgs>)); } }
      });
    }
    if (source['codeFilter']) { this.codeFilter = source.codeFilter.map((x) => new fhir.DataRequirementCodeFilter(x)); }
    else { this.codeFilter = []; }
    if (source['dateFilter']) { this.dateFilter = source.dateFilter.map((x) => new fhir.DataRequirementDateFilter(x)); }
    else { this.dateFilter = []; }
    if (source['limit']) { this.limit = new fhir.FhirPositiveInt({value: source.limit}); }
    if (source['_limit']) {
      if (this.limit) { this.limit.addExtendedProperties(source._limit!); }
      else { this.limit = new fhir.FhirPositiveInt(source._limit as Partial<fhir.FhirPositiveIntArgs>); }
    }
    if (source['sort']) { this.sort = source.sort.map((x) => new fhir.DataRequirementSort(x)); }
    else { this.sort = []; }
  }
  /**
   * Required-bound Value Set for type (DataRequirement.type)
   */
  public static get typeRequiredCodes() {
    return AllTypesCodes;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'DataRequirement' }
    if (!this['type']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property type fhir: DataRequirement.type:code', expression: [expression] });
    }
    if (this['type'] && (!Object.values(AllTypesCodes).includes(this.type.value as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'type (DataRequirement.type) of type code is missing code for Required binding to: AllTypes', expression: [expression] });
    }
    if (this["type"]) { issues.push(...this.type.doModelValidation(expression+'.type')); }
    if (this["profile"]) { this.profile.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.profile[${i}]`)); }) }
    if (this["mustSupport"]) { this.mustSupport.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.mustSupport[${i}]`)); }) }
    if (this["codeFilter"]) { this.codeFilter.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.codeFilter[${i}]`)); }) }
    if (this["dateFilter"]) { this.dateFilter.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.dateFilter[${i}]`)); }) }
    if (this["limit"]) { issues.push(...this.limit.doModelValidation(expression+'.limit')); }
    if (this["sort"]) { this.sort.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.sort[${i}]`)); }) }
    return issues;
  }
}
