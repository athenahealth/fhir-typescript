// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/risk-estimate-type|4.0.1
/**
 * Whether the risk estimate is dichotomous, continuous or qualitative and the specific type of risk estimate (eg proportion or median).
 */
export const RiskEstimateTypeCodings = {
    /**
     * count: descriptive measure reported as total number of items.
     */
    Count: {
        display: "count",
        code: "count",
        system: "http://terminology.hl7.org/CodeSystem/risk-estimate-type",
    },
    /**
     * derivedProportion: A special use case where the proportion is derived from a formula rather than derived from summary evidence.
     */
    DerivedProportion: {
        display: "derivedProportion",
        code: "derivedProportion",
        system: "http://terminology.hl7.org/CodeSystem/risk-estimate-type",
    },
    /**
     * descriptive: descriptive measure reported as narrative.
     */
    Descriptive: {
        display: "descriptive",
        code: "descriptive",
        system: "http://terminology.hl7.org/CodeSystem/risk-estimate-type",
    },
    /**
     * mean: continuous numerical measure reported as an average.
     */
    Mean: {
        display: "mean",
        code: "mean",
        system: "http://terminology.hl7.org/CodeSystem/risk-estimate-type",
    },
    /**
     * median: continuous numerical measure reported as the middle of the range.
     */
    Median: {
        display: "median",
        code: "median",
        system: "http://terminology.hl7.org/CodeSystem/risk-estimate-type",
    },
    /**
     * proportion: dichotomous measure (present or absent) reported as a ratio compared to the denominator of 1 (A percentage is a proportion with denominator of 100).
     */
    Proportion: {
        display: "proportion",
        code: "proportion",
        system: "http://terminology.hl7.org/CodeSystem/risk-estimate-type",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmlza0VzdGltYXRlVHlwZUNvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL1Jpc2tFc3RpbWF0ZVR5cGVDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLHVFQUF1RTtBQWtDdkU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBOEI7SUFDaEU7O09BRUc7SUFDSCxLQUFLLEVBQUU7UUFDTCxPQUFPLEVBQUUsT0FBTztRQUNoQixJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSwwREFBMEQ7S0FDbkU7SUFDRDs7T0FFRztJQUNILGlCQUFpQixFQUFFO1FBQ2pCLE9BQU8sRUFBRSxtQkFBbUI7UUFDNUIsSUFBSSxFQUFFLG1CQUFtQjtRQUN6QixNQUFNLEVBQUUsMERBQTBEO0tBQ25FO0lBQ0Q7O09BRUc7SUFDSCxXQUFXLEVBQUU7UUFDWCxPQUFPLEVBQUUsYUFBYTtRQUN0QixJQUFJLEVBQUUsYUFBYTtRQUNuQixNQUFNLEVBQUUsMERBQTBEO0tBQ25FO0lBQ0Q7O09BRUc7SUFDSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsTUFBTTtRQUNmLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLDBEQUEwRDtLQUNuRTtJQUNEOztPQUVHO0lBQ0gsTUFBTSxFQUFFO1FBQ04sT0FBTyxFQUFFLFFBQVE7UUFDakIsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsMERBQTBEO0tBQ25FO0lBQ0Q7O09BRUc7SUFDSCxVQUFVLEVBQUU7UUFDVixPQUFPLEVBQUUsWUFBWTtRQUNyQixJQUFJLEVBQUUsWUFBWTtRQUNsQixNQUFNLEVBQUUsMERBQTBEO0tBQ25FO0NBQ08sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9yaXNrLWVzdGltYXRlLXR5cGV8NC4wLjFcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBXaGV0aGVyIHRoZSByaXNrIGVzdGltYXRlIGlzIGRpY2hvdG9tb3VzLCBjb250aW51b3VzIG9yIHF1YWxpdGF0aXZlIGFuZCB0aGUgc3BlY2lmaWMgdHlwZSBvZiByaXNrIGVzdGltYXRlIChlZyBwcm9wb3J0aW9uIG9yIG1lZGlhbikuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSaXNrRXN0aW1hdGVUeXBlQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBjb3VudDogZGVzY3JpcHRpdmUgbWVhc3VyZSByZXBvcnRlZCBhcyB0b3RhbCBudW1iZXIgb2YgaXRlbXMuXHJcbiAgICovXHJcbiAgQ291bnQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogZGVyaXZlZFByb3BvcnRpb246IEEgc3BlY2lhbCB1c2UgY2FzZSB3aGVyZSB0aGUgcHJvcG9ydGlvbiBpcyBkZXJpdmVkIGZyb20gYSBmb3JtdWxhIHJhdGhlciB0aGFuIGRlcml2ZWQgZnJvbSBzdW1tYXJ5IGV2aWRlbmNlLlxyXG4gICAqL1xyXG4gIERlcml2ZWRQcm9wb3J0aW9uOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGRlc2NyaXB0aXZlOiBkZXNjcmlwdGl2ZSBtZWFzdXJlIHJlcG9ydGVkIGFzIG5hcnJhdGl2ZS5cclxuICAgKi9cclxuICBEZXNjcmlwdGl2ZTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBtZWFuOiBjb250aW51b3VzIG51bWVyaWNhbCBtZWFzdXJlIHJlcG9ydGVkIGFzIGFuIGF2ZXJhZ2UuXHJcbiAgICovXHJcbiAgTWVhbjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBtZWRpYW46IGNvbnRpbnVvdXMgbnVtZXJpY2FsIG1lYXN1cmUgcmVwb3J0ZWQgYXMgdGhlIG1pZGRsZSBvZiB0aGUgcmFuZ2UuXHJcbiAgICovXHJcbiAgTWVkaWFuOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHByb3BvcnRpb246IGRpY2hvdG9tb3VzIG1lYXN1cmUgKHByZXNlbnQgb3IgYWJzZW50KSByZXBvcnRlZCBhcyBhIHJhdGlvIGNvbXBhcmVkIHRvIHRoZSBkZW5vbWluYXRvciBvZiAxIChBIHBlcmNlbnRhZ2UgaXMgYSBwcm9wb3J0aW9uIHdpdGggZGVub21pbmF0b3Igb2YgMTAwKS5cclxuICAgKi9cclxuICBQcm9wb3J0aW9uOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogV2hldGhlciB0aGUgcmlzayBlc3RpbWF0ZSBpcyBkaWNob3RvbW91cywgY29udGludW91cyBvciBxdWFsaXRhdGl2ZSBhbmQgdGhlIHNwZWNpZmljIHR5cGUgb2YgcmlzayBlc3RpbWF0ZSAoZWcgcHJvcG9ydGlvbiBvciBtZWRpYW4pLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFJpc2tFc3RpbWF0ZVR5cGVDb2RpbmdzOlJpc2tFc3RpbWF0ZVR5cGVDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGNvdW50OiBkZXNjcmlwdGl2ZSBtZWFzdXJlIHJlcG9ydGVkIGFzIHRvdGFsIG51bWJlciBvZiBpdGVtcy5cclxuICAgKi9cclxuICBDb3VudDoge1xyXG4gICAgZGlzcGxheTogXCJjb3VudFwiLFxyXG4gICAgY29kZTogXCJjb3VudFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vcmlzay1lc3RpbWF0ZS10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBkZXJpdmVkUHJvcG9ydGlvbjogQSBzcGVjaWFsIHVzZSBjYXNlIHdoZXJlIHRoZSBwcm9wb3J0aW9uIGlzIGRlcml2ZWQgZnJvbSBhIGZvcm11bGEgcmF0aGVyIHRoYW4gZGVyaXZlZCBmcm9tIHN1bW1hcnkgZXZpZGVuY2UuXHJcbiAgICovXHJcbiAgRGVyaXZlZFByb3BvcnRpb246IHtcclxuICAgIGRpc3BsYXk6IFwiZGVyaXZlZFByb3BvcnRpb25cIixcclxuICAgIGNvZGU6IFwiZGVyaXZlZFByb3BvcnRpb25cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3Jpc2stZXN0aW1hdGUtdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogZGVzY3JpcHRpdmU6IGRlc2NyaXB0aXZlIG1lYXN1cmUgcmVwb3J0ZWQgYXMgbmFycmF0aXZlLlxyXG4gICAqL1xyXG4gIERlc2NyaXB0aXZlOiB7XHJcbiAgICBkaXNwbGF5OiBcImRlc2NyaXB0aXZlXCIsXHJcbiAgICBjb2RlOiBcImRlc2NyaXB0aXZlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9yaXNrLWVzdGltYXRlLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIG1lYW46IGNvbnRpbnVvdXMgbnVtZXJpY2FsIG1lYXN1cmUgcmVwb3J0ZWQgYXMgYW4gYXZlcmFnZS5cclxuICAgKi9cclxuICBNZWFuOiB7XHJcbiAgICBkaXNwbGF5OiBcIm1lYW5cIixcclxuICAgIGNvZGU6IFwibWVhblwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vcmlzay1lc3RpbWF0ZS10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBtZWRpYW46IGNvbnRpbnVvdXMgbnVtZXJpY2FsIG1lYXN1cmUgcmVwb3J0ZWQgYXMgdGhlIG1pZGRsZSBvZiB0aGUgcmFuZ2UuXHJcbiAgICovXHJcbiAgTWVkaWFuOiB7XHJcbiAgICBkaXNwbGF5OiBcIm1lZGlhblwiLFxyXG4gICAgY29kZTogXCJtZWRpYW5cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3Jpc2stZXN0aW1hdGUtdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogcHJvcG9ydGlvbjogZGljaG90b21vdXMgbWVhc3VyZSAocHJlc2VudCBvciBhYnNlbnQpIHJlcG9ydGVkIGFzIGEgcmF0aW8gY29tcGFyZWQgdG8gdGhlIGRlbm9taW5hdG9yIG9mIDEgKEEgcGVyY2VudGFnZSBpcyBhIHByb3BvcnRpb24gd2l0aCBkZW5vbWluYXRvciBvZiAxMDApLlxyXG4gICAqL1xyXG4gIFByb3BvcnRpb246IHtcclxuICAgIGRpc3BsYXk6IFwicHJvcG9ydGlvblwiLFxyXG4gICAgY29kZTogXCJwcm9wb3J0aW9uXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9yaXNrLWVzdGltYXRlLXR5cGVcIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=