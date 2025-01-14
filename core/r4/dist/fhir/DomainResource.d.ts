import * as fhir from '../fhir.js';
/**
 * Valid arguments for the DomainResource type.
 */
export interface DomainResourceArgs extends fhir.ResourceArgs {
    /**
     * Contained resources do not have narrative. Resources that are not contained SHOULD have a narrative. In some cases, a resource may only have text with little or no additional discrete data (as long as all minOccurs=1 elements are satisfied).  This may be necessary for data from legacy systems where information is captured as a "text blob" or where text is additionally entered raw or narrated and encoded information is added later.
     */
    text?: fhir.NarrativeArgs | undefined;
    /**
     * This should never be done when the content can be identified properly, as once identification is lost, it is extremely difficult (and context dependent) to restore it again. Contained resources may have profiles and tags In their meta elements, but SHALL NOT have security labels.
     */
    contained?: fhir.ResourceArgs[] | any[] | undefined;
    /**
     * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
     */
    extension?: fhir.ExtensionArgs[] | undefined;
    /**
     * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
     */
    modifierExtension?: fhir.ExtensionArgs[] | undefined;
}
/**
 * A resource that includes narrative, extensions, and contained resources.
 */
export declare class DomainResource extends fhir.Resource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Contained resources do not have narrative. Resources that are not contained SHOULD have a narrative. In some cases, a resource may only have text with little or no additional discrete data (as long as all minOccurs=1 elements are satisfied).  This may be necessary for data from legacy systems where information is captured as a "text blob" or where text is additionally entered raw or narrated and encoded information is added later.
     */
    text?: fhir.Narrative | undefined;
    /**
     * This should never be done when the content can be identified properly, as once identification is lost, it is extremely difficult (and context dependent) to restore it again. Contained resources may have profiles and tags In their meta elements, but SHALL NOT have security labels.
     */
    contained: fhir.FhirResource[];
    /**
     * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
     */
    extension: fhir.Extension[];
    /**
     * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
     */
    modifierExtension: fhir.Extension[];
    /**
     * Default constructor for DomainResource - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DomainResourceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
    /**
     * Fluent-style function to add extensions
     * @param ext
     * @returns
     */
    addExtension(ext: fhir.ExtensionArgs): DomainResource;
    /**
     * Remove ALL instances of extensions with a matching URL, optionally recurse into extension.extension.
     * @param url URL of extensions to remove
     * @param searchNested If the removal should search for nested extensions
     */
    removeExtensions(url: fhir.FhirString | string, searchNested?: boolean): DomainResource;
    /**
     * Find the first instance of an extension with a matching URL, optionally recurse into extension.extension.
     * @param url URL to search for
     * @param searchNested If the search should nest into extensions
     * @returns The FHIR Extension if found, or undefined.
     */
    findExtension(url: fhir.FhirString | string, searchNested?: boolean): fhir.Extension | undefined;
    /**
     * Find all instances of an extension with a matching URL, optionally recurse into extension.extension.
     * @param url URL to search for
     * @param searchNested If the search should nest into extensions
     * @returns A new array of FHIR Extensions, with just the desired extensions
     */
    filterExtensions(url: fhir.FhirString | string, searchNested?: boolean): fhir.Extension[];
    /**
     * Internal recursive search function
     * @param url
     * @param exts
     * @returns A new array (flat) of matching extensions
     */
    private static recurseForExtension;
}
//# sourceMappingURL=DomainResource.d.ts.map