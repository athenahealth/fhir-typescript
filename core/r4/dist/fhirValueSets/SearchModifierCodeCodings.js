// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/search-modifier-code|4.0.1
/**
 * A supported modifier for a search parameter.
 */
export const SearchModifierCodeCodings = {
    /**
     * above: The search parameter tests whether the value in a resource subsumes the specified value (is-a, or hierarchical relationships).
     */
    Above: {
        display: "Above",
        code: "above",
        system: "http://hl7.org/fhir/search-modifier-code",
    },
    /**
     * below: The search parameter tests whether the value in a resource is subsumed by the specified value (is-a, or hierarchical relationships).
     */
    Below: {
        display: "Below",
        code: "below",
        system: "http://hl7.org/fhir/search-modifier-code",
    },
    /**
     * contains: The search parameter returns resources that include the supplied parameter value anywhere within the field being searched.
     */
    Contains: {
        display: "Contains",
        code: "contains",
        system: "http://hl7.org/fhir/search-modifier-code",
    },
    /**
     * exact: The search parameter returns resources that have a value that exactly matches the supplied parameter (the whole string, including casing and accents).
     */
    Exact: {
        display: "Exact",
        code: "exact",
        system: "http://hl7.org/fhir/search-modifier-code",
    },
    /**
     * identifier: The search parameter applies to the identifier on the resource, not the reference.
     */
    Identifier: {
        display: "Identifier",
        code: "identifier",
        system: "http://hl7.org/fhir/search-modifier-code",
    },
    /**
     * in: The search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the coding is in the specified value set.
     */
    In: {
        display: "In",
        code: "in",
        system: "http://hl7.org/fhir/search-modifier-code",
    },
    /**
     * missing: The search parameter returns resources that have a value or not.
     */
    Missing: {
        display: "Missing",
        code: "missing",
        system: "http://hl7.org/fhir/search-modifier-code",
    },
    /**
     * not: The search parameter returns resources that do not contain a match.
     */
    Not: {
        display: "Not",
        code: "not",
        system: "http://hl7.org/fhir/search-modifier-code",
    },
    /**
     * not-in: The search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the coding is not in the specified value set.
     */
    NotIn: {
        display: "Not In",
        code: "not-in",
        system: "http://hl7.org/fhir/search-modifier-code",
    },
    /**
     * ofType: The search parameter has the format system|code|value, where the system and code refer to an Identifier.type.coding.system and .code, and match if any of the type codes match. All 3 parts must be present.
     */
    OfType: {
        display: "Of Type",
        code: "ofType",
        system: "http://hl7.org/fhir/search-modifier-code",
    },
    /**
     * text: The search parameter is processed as a string that searches text associated with the code/value - either CodeableConcept.text, Coding.display, or Identifier.type.text.
     */
    Text: {
        display: "Text",
        code: "text",
        system: "http://hl7.org/fhir/search-modifier-code",
    },
    /**
     * type: The search parameter only applies to the Resource Type specified as a modifier (e.g. the modifier is not actually :type, but :Patient etc.).
     */
    Type: {
        display: "Type",
        code: "type",
        system: "http://hl7.org/fhir/search-modifier-code",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoTW9kaWZpZXJDb2RlQ29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvU2VhcmNoTW9kaWZpZXJDb2RlQ29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyx5RUFBeUU7QUEwRHpFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0seUJBQXlCLEdBQWdDO0lBQ3BFOztPQUVHO0lBQ0gsS0FBSyxFQUFFO1FBQ0wsT0FBTyxFQUFFLE9BQU87UUFDaEIsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsMENBQTBDO0tBQ25EO0lBQ0Q7O09BRUc7SUFDSCxLQUFLLEVBQUU7UUFDTCxPQUFPLEVBQUUsT0FBTztRQUNoQixJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSwwQ0FBMEM7S0FDbkQ7SUFDRDs7T0FFRztJQUNILFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxVQUFVO1FBQ25CLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSwwQ0FBMEM7S0FDbkQ7SUFDRDs7T0FFRztJQUNILEtBQUssRUFBRTtRQUNMLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTSxFQUFFLDBDQUEwQztLQUNuRDtJQUNEOztPQUVHO0lBQ0gsVUFBVSxFQUFFO1FBQ1YsT0FBTyxFQUFFLFlBQVk7UUFDckIsSUFBSSxFQUFFLFlBQVk7UUFDbEIsTUFBTSxFQUFFLDBDQUEwQztLQUNuRDtJQUNEOztPQUVHO0lBQ0gsRUFBRSxFQUFFO1FBQ0YsT0FBTyxFQUFFLElBQUk7UUFDYixJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sRUFBRSwwQ0FBMEM7S0FDbkQ7SUFDRDs7T0FFRztJQUNILE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLDBDQUEwQztLQUNuRDtJQUNEOztPQUVHO0lBQ0gsR0FBRyxFQUFFO1FBQ0gsT0FBTyxFQUFFLEtBQUs7UUFDZCxJQUFJLEVBQUUsS0FBSztRQUNYLE1BQU0sRUFBRSwwQ0FBMEM7S0FDbkQ7SUFDRDs7T0FFRztJQUNILEtBQUssRUFBRTtRQUNMLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLDBDQUEwQztLQUNuRDtJQUNEOztPQUVHO0lBQ0gsTUFBTSxFQUFFO1FBQ04sT0FBTyxFQUFFLFNBQVM7UUFDbEIsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsMENBQTBDO0tBQ25EO0lBQ0Q7O09BRUc7SUFDSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsTUFBTTtRQUNmLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLDBDQUEwQztLQUNuRDtJQUNEOztPQUVHO0lBQ0gsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLE1BQU07UUFDZixJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSwwQ0FBMEM7S0FDbkQ7Q0FDTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3NlYXJjaC1tb2RpZmllci1jb2RlfDQuMC4xXHJcblxyXG5pbXBvcnQgeyBDb2RpbmdBcmdzIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogQSBzdXBwb3J0ZWQgbW9kaWZpZXIgZm9yIGEgc2VhcmNoIHBhcmFtZXRlci5cclxuICovXHJcbmV4cG9ydCB0eXBlIFNlYXJjaE1vZGlmaWVyQ29kZUNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogYWJvdmU6IFRoZSBzZWFyY2ggcGFyYW1ldGVyIHRlc3RzIHdoZXRoZXIgdGhlIHZhbHVlIGluIGEgcmVzb3VyY2Ugc3Vic3VtZXMgdGhlIHNwZWNpZmllZCB2YWx1ZSAoaXMtYSwgb3IgaGllcmFyY2hpY2FsIHJlbGF0aW9uc2hpcHMpLlxyXG4gICAqL1xyXG4gIEFib3ZlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGJlbG93OiBUaGUgc2VhcmNoIHBhcmFtZXRlciB0ZXN0cyB3aGV0aGVyIHRoZSB2YWx1ZSBpbiBhIHJlc291cmNlIGlzIHN1YnN1bWVkIGJ5IHRoZSBzcGVjaWZpZWQgdmFsdWUgKGlzLWEsIG9yIGhpZXJhcmNoaWNhbCByZWxhdGlvbnNoaXBzKS5cclxuICAgKi9cclxuICBCZWxvdzogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBjb250YWluczogVGhlIHNlYXJjaCBwYXJhbWV0ZXIgcmV0dXJucyByZXNvdXJjZXMgdGhhdCBpbmNsdWRlIHRoZSBzdXBwbGllZCBwYXJhbWV0ZXIgdmFsdWUgYW55d2hlcmUgd2l0aGluIHRoZSBmaWVsZCBiZWluZyBzZWFyY2hlZC5cclxuICAgKi9cclxuICBDb250YWluczogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBleGFjdDogVGhlIHNlYXJjaCBwYXJhbWV0ZXIgcmV0dXJucyByZXNvdXJjZXMgdGhhdCBoYXZlIGEgdmFsdWUgdGhhdCBleGFjdGx5IG1hdGNoZXMgdGhlIHN1cHBsaWVkIHBhcmFtZXRlciAodGhlIHdob2xlIHN0cmluZywgaW5jbHVkaW5nIGNhc2luZyBhbmQgYWNjZW50cykuXHJcbiAgICovXHJcbiAgRXhhY3Q6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogaWRlbnRpZmllcjogVGhlIHNlYXJjaCBwYXJhbWV0ZXIgYXBwbGllcyB0byB0aGUgaWRlbnRpZmllciBvbiB0aGUgcmVzb3VyY2UsIG5vdCB0aGUgcmVmZXJlbmNlLlxyXG4gICAqL1xyXG4gIElkZW50aWZpZXI6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogaW46IFRoZSBzZWFyY2ggcGFyYW1ldGVyIGlzIGEgVVJJIChyZWxhdGl2ZSBvciBhYnNvbHV0ZSkgdGhhdCBpZGVudGlmaWVzIGEgdmFsdWUgc2V0LCBhbmQgdGhlIHNlYXJjaCBwYXJhbWV0ZXIgdGVzdHMgd2hldGhlciB0aGUgY29kaW5nIGlzIGluIHRoZSBzcGVjaWZpZWQgdmFsdWUgc2V0LlxyXG4gICAqL1xyXG4gIEluOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIG1pc3Npbmc6IFRoZSBzZWFyY2ggcGFyYW1ldGVyIHJldHVybnMgcmVzb3VyY2VzIHRoYXQgaGF2ZSBhIHZhbHVlIG9yIG5vdC5cclxuICAgKi9cclxuICBNaXNzaW5nOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIG5vdDogVGhlIHNlYXJjaCBwYXJhbWV0ZXIgcmV0dXJucyByZXNvdXJjZXMgdGhhdCBkbyBub3QgY29udGFpbiBhIG1hdGNoLlxyXG4gICAqL1xyXG4gIE5vdDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBub3QtaW46IFRoZSBzZWFyY2ggcGFyYW1ldGVyIGlzIGEgVVJJIChyZWxhdGl2ZSBvciBhYnNvbHV0ZSkgdGhhdCBpZGVudGlmaWVzIGEgdmFsdWUgc2V0LCBhbmQgdGhlIHNlYXJjaCBwYXJhbWV0ZXIgdGVzdHMgd2hldGhlciB0aGUgY29kaW5nIGlzIG5vdCBpbiB0aGUgc3BlY2lmaWVkIHZhbHVlIHNldC5cclxuICAgKi9cclxuICBOb3RJbjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBvZlR5cGU6IFRoZSBzZWFyY2ggcGFyYW1ldGVyIGhhcyB0aGUgZm9ybWF0IHN5c3RlbXxjb2RlfHZhbHVlLCB3aGVyZSB0aGUgc3lzdGVtIGFuZCBjb2RlIHJlZmVyIHRvIGFuIElkZW50aWZpZXIudHlwZS5jb2Rpbmcuc3lzdGVtIGFuZCAuY29kZSwgYW5kIG1hdGNoIGlmIGFueSBvZiB0aGUgdHlwZSBjb2RlcyBtYXRjaC4gQWxsIDMgcGFydHMgbXVzdCBiZSBwcmVzZW50LlxyXG4gICAqL1xyXG4gIE9mVHlwZTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiB0ZXh0OiBUaGUgc2VhcmNoIHBhcmFtZXRlciBpcyBwcm9jZXNzZWQgYXMgYSBzdHJpbmcgdGhhdCBzZWFyY2hlcyB0ZXh0IGFzc29jaWF0ZWQgd2l0aCB0aGUgY29kZS92YWx1ZSAtIGVpdGhlciBDb2RlYWJsZUNvbmNlcHQudGV4dCwgQ29kaW5nLmRpc3BsYXksIG9yIElkZW50aWZpZXIudHlwZS50ZXh0LlxyXG4gICAqL1xyXG4gIFRleHQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogdHlwZTogVGhlIHNlYXJjaCBwYXJhbWV0ZXIgb25seSBhcHBsaWVzIHRvIHRoZSBSZXNvdXJjZSBUeXBlIHNwZWNpZmllZCBhcyBhIG1vZGlmaWVyIChlLmcuIHRoZSBtb2RpZmllciBpcyBub3QgYWN0dWFsbHkgOnR5cGUsIGJ1dCA6UGF0aWVudCBldGMuKS5cclxuICAgKi9cclxuICBUeXBlOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogQSBzdXBwb3J0ZWQgbW9kaWZpZXIgZm9yIGEgc2VhcmNoIHBhcmFtZXRlci5cclxuICovXHJcbmV4cG9ydCBjb25zdCBTZWFyY2hNb2RpZmllckNvZGVDb2RpbmdzOlNlYXJjaE1vZGlmaWVyQ29kZUNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogYWJvdmU6IFRoZSBzZWFyY2ggcGFyYW1ldGVyIHRlc3RzIHdoZXRoZXIgdGhlIHZhbHVlIGluIGEgcmVzb3VyY2Ugc3Vic3VtZXMgdGhlIHNwZWNpZmllZCB2YWx1ZSAoaXMtYSwgb3IgaGllcmFyY2hpY2FsIHJlbGF0aW9uc2hpcHMpLlxyXG4gICAqL1xyXG4gIEFib3ZlOiB7XHJcbiAgICBkaXNwbGF5OiBcIkFib3ZlXCIsXHJcbiAgICBjb2RlOiBcImFib3ZlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9zZWFyY2gtbW9kaWZpZXItY29kZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogYmVsb3c6IFRoZSBzZWFyY2ggcGFyYW1ldGVyIHRlc3RzIHdoZXRoZXIgdGhlIHZhbHVlIGluIGEgcmVzb3VyY2UgaXMgc3Vic3VtZWQgYnkgdGhlIHNwZWNpZmllZCB2YWx1ZSAoaXMtYSwgb3IgaGllcmFyY2hpY2FsIHJlbGF0aW9uc2hpcHMpLlxyXG4gICAqL1xyXG4gIEJlbG93OiB7XHJcbiAgICBkaXNwbGF5OiBcIkJlbG93XCIsXHJcbiAgICBjb2RlOiBcImJlbG93XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9zZWFyY2gtbW9kaWZpZXItY29kZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogY29udGFpbnM6IFRoZSBzZWFyY2ggcGFyYW1ldGVyIHJldHVybnMgcmVzb3VyY2VzIHRoYXQgaW5jbHVkZSB0aGUgc3VwcGxpZWQgcGFyYW1ldGVyIHZhbHVlIGFueXdoZXJlIHdpdGhpbiB0aGUgZmllbGQgYmVpbmcgc2VhcmNoZWQuXHJcbiAgICovXHJcbiAgQ29udGFpbnM6IHtcclxuICAgIGRpc3BsYXk6IFwiQ29udGFpbnNcIixcclxuICAgIGNvZGU6IFwiY29udGFpbnNcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3NlYXJjaC1tb2RpZmllci1jb2RlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBleGFjdDogVGhlIHNlYXJjaCBwYXJhbWV0ZXIgcmV0dXJucyByZXNvdXJjZXMgdGhhdCBoYXZlIGEgdmFsdWUgdGhhdCBleGFjdGx5IG1hdGNoZXMgdGhlIHN1cHBsaWVkIHBhcmFtZXRlciAodGhlIHdob2xlIHN0cmluZywgaW5jbHVkaW5nIGNhc2luZyBhbmQgYWNjZW50cykuXHJcbiAgICovXHJcbiAgRXhhY3Q6IHtcclxuICAgIGRpc3BsYXk6IFwiRXhhY3RcIixcclxuICAgIGNvZGU6IFwiZXhhY3RcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3NlYXJjaC1tb2RpZmllci1jb2RlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBpZGVudGlmaWVyOiBUaGUgc2VhcmNoIHBhcmFtZXRlciBhcHBsaWVzIHRvIHRoZSBpZGVudGlmaWVyIG9uIHRoZSByZXNvdXJjZSwgbm90IHRoZSByZWZlcmVuY2UuXHJcbiAgICovXHJcbiAgSWRlbnRpZmllcjoge1xyXG4gICAgZGlzcGxheTogXCJJZGVudGlmaWVyXCIsXHJcbiAgICBjb2RlOiBcImlkZW50aWZpZXJcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3NlYXJjaC1tb2RpZmllci1jb2RlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBpbjogVGhlIHNlYXJjaCBwYXJhbWV0ZXIgaXMgYSBVUkkgKHJlbGF0aXZlIG9yIGFic29sdXRlKSB0aGF0IGlkZW50aWZpZXMgYSB2YWx1ZSBzZXQsIGFuZCB0aGUgc2VhcmNoIHBhcmFtZXRlciB0ZXN0cyB3aGV0aGVyIHRoZSBjb2RpbmcgaXMgaW4gdGhlIHNwZWNpZmllZCB2YWx1ZSBzZXQuXHJcbiAgICovXHJcbiAgSW46IHtcclxuICAgIGRpc3BsYXk6IFwiSW5cIixcclxuICAgIGNvZGU6IFwiaW5cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3NlYXJjaC1tb2RpZmllci1jb2RlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBtaXNzaW5nOiBUaGUgc2VhcmNoIHBhcmFtZXRlciByZXR1cm5zIHJlc291cmNlcyB0aGF0IGhhdmUgYSB2YWx1ZSBvciBub3QuXHJcbiAgICovXHJcbiAgTWlzc2luZzoge1xyXG4gICAgZGlzcGxheTogXCJNaXNzaW5nXCIsXHJcbiAgICBjb2RlOiBcIm1pc3NpbmdcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3NlYXJjaC1tb2RpZmllci1jb2RlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBub3Q6IFRoZSBzZWFyY2ggcGFyYW1ldGVyIHJldHVybnMgcmVzb3VyY2VzIHRoYXQgZG8gbm90IGNvbnRhaW4gYSBtYXRjaC5cclxuICAgKi9cclxuICBOb3Q6IHtcclxuICAgIGRpc3BsYXk6IFwiTm90XCIsXHJcbiAgICBjb2RlOiBcIm5vdFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvc2VhcmNoLW1vZGlmaWVyLWNvZGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIG5vdC1pbjogVGhlIHNlYXJjaCBwYXJhbWV0ZXIgaXMgYSBVUkkgKHJlbGF0aXZlIG9yIGFic29sdXRlKSB0aGF0IGlkZW50aWZpZXMgYSB2YWx1ZSBzZXQsIGFuZCB0aGUgc2VhcmNoIHBhcmFtZXRlciB0ZXN0cyB3aGV0aGVyIHRoZSBjb2RpbmcgaXMgbm90IGluIHRoZSBzcGVjaWZpZWQgdmFsdWUgc2V0LlxyXG4gICAqL1xyXG4gIE5vdEluOiB7XHJcbiAgICBkaXNwbGF5OiBcIk5vdCBJblwiLFxyXG4gICAgY29kZTogXCJub3QtaW5cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3NlYXJjaC1tb2RpZmllci1jb2RlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBvZlR5cGU6IFRoZSBzZWFyY2ggcGFyYW1ldGVyIGhhcyB0aGUgZm9ybWF0IHN5c3RlbXxjb2RlfHZhbHVlLCB3aGVyZSB0aGUgc3lzdGVtIGFuZCBjb2RlIHJlZmVyIHRvIGFuIElkZW50aWZpZXIudHlwZS5jb2Rpbmcuc3lzdGVtIGFuZCAuY29kZSwgYW5kIG1hdGNoIGlmIGFueSBvZiB0aGUgdHlwZSBjb2RlcyBtYXRjaC4gQWxsIDMgcGFydHMgbXVzdCBiZSBwcmVzZW50LlxyXG4gICAqL1xyXG4gIE9mVHlwZToge1xyXG4gICAgZGlzcGxheTogXCJPZiBUeXBlXCIsXHJcbiAgICBjb2RlOiBcIm9mVHlwZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvc2VhcmNoLW1vZGlmaWVyLWNvZGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHRleHQ6IFRoZSBzZWFyY2ggcGFyYW1ldGVyIGlzIHByb2Nlc3NlZCBhcyBhIHN0cmluZyB0aGF0IHNlYXJjaGVzIHRleHQgYXNzb2NpYXRlZCB3aXRoIHRoZSBjb2RlL3ZhbHVlIC0gZWl0aGVyIENvZGVhYmxlQ29uY2VwdC50ZXh0LCBDb2RpbmcuZGlzcGxheSwgb3IgSWRlbnRpZmllci50eXBlLnRleHQuXHJcbiAgICovXHJcbiAgVGV4dDoge1xyXG4gICAgZGlzcGxheTogXCJUZXh0XCIsXHJcbiAgICBjb2RlOiBcInRleHRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3NlYXJjaC1tb2RpZmllci1jb2RlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiB0eXBlOiBUaGUgc2VhcmNoIHBhcmFtZXRlciBvbmx5IGFwcGxpZXMgdG8gdGhlIFJlc291cmNlIFR5cGUgc3BlY2lmaWVkIGFzIGEgbW9kaWZpZXIgKGUuZy4gdGhlIG1vZGlmaWVyIGlzIG5vdCBhY3R1YWxseSA6dHlwZSwgYnV0IDpQYXRpZW50IGV0Yy4pLlxyXG4gICAqL1xyXG4gIFR5cGU6IHtcclxuICAgIGRpc3BsYXk6IFwiVHlwZVwiLFxyXG4gICAgY29kZTogXCJ0eXBlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9zZWFyY2gtbW9kaWZpZXItY29kZVwiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==