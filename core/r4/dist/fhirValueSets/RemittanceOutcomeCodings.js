// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/remittance-outcome|4.0.1
/**
 * This value set includes Claim Processing Outcome codes.
 */
export const RemittanceOutcomeCodings = {
    /**
     * complete: The processing has completed without errors
     */
    ProcessingComplete: {
        display: "Processing Complete",
        code: "complete",
        system: "http://hl7.org/fhir/remittance-outcome",
    },
    /**
     * error: One or more errors have been detected in the Claim
     */
    Error: {
        display: "Error",
        code: "error",
        system: "http://hl7.org/fhir/remittance-outcome",
    },
    /**
     * partial: No errors have been detected in the Claim and some of the adjudication has been performed.
     */
    PartialProcessing: {
        display: "Partial Processing",
        code: "partial",
        system: "http://hl7.org/fhir/remittance-outcome",
    },
    /**
     * queued: The Claim/Pre-authorization/Pre-determination has been received but processing has not begun.
     */
    Queued: {
        display: "Queued",
        code: "queued",
        system: "http://hl7.org/fhir/remittance-outcome",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVtaXR0YW5jZU91dGNvbWVDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9SZW1pdHRhbmNlT3V0Y29tZUNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsdUVBQXVFO0FBMEJ2RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUErQjtJQUNsRTs7T0FFRztJQUNILGtCQUFrQixFQUFFO1FBQ2xCLE9BQU8sRUFBRSxxQkFBcUI7UUFDOUIsSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFLHdDQUF3QztLQUNqRDtJQUNEOztPQUVHO0lBQ0gsS0FBSyxFQUFFO1FBQ0wsT0FBTyxFQUFFLE9BQU87UUFDaEIsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsd0NBQXdDO0tBQ2pEO0lBQ0Q7O09BRUc7SUFDSCxpQkFBaUIsRUFBRTtRQUNqQixPQUFPLEVBQUUsb0JBQW9CO1FBQzdCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLHdDQUF3QztLQUNqRDtJQUNEOztPQUVHO0lBQ0gsTUFBTSxFQUFFO1FBQ04sT0FBTyxFQUFFLFFBQVE7UUFDakIsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsd0NBQXdDO0tBQ2pEO0NBQ08sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9yZW1pdHRhbmNlLW91dGNvbWV8NC4wLjFcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBUaGlzIHZhbHVlIHNldCBpbmNsdWRlcyBDbGFpbSBQcm9jZXNzaW5nIE91dGNvbWUgY29kZXMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSZW1pdHRhbmNlT3V0Y29tZUNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogY29tcGxldGU6IFRoZSBwcm9jZXNzaW5nIGhhcyBjb21wbGV0ZWQgd2l0aG91dCBlcnJvcnNcclxuICAgKi9cclxuICBQcm9jZXNzaW5nQ29tcGxldGU6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogZXJyb3I6IE9uZSBvciBtb3JlIGVycm9ycyBoYXZlIGJlZW4gZGV0ZWN0ZWQgaW4gdGhlIENsYWltXHJcbiAgICovXHJcbiAgRXJyb3I6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogcGFydGlhbDogTm8gZXJyb3JzIGhhdmUgYmVlbiBkZXRlY3RlZCBpbiB0aGUgQ2xhaW0gYW5kIHNvbWUgb2YgdGhlIGFkanVkaWNhdGlvbiBoYXMgYmVlbiBwZXJmb3JtZWQuXHJcbiAgICovXHJcbiAgUGFydGlhbFByb2Nlc3Npbmc6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogcXVldWVkOiBUaGUgQ2xhaW0vUHJlLWF1dGhvcml6YXRpb24vUHJlLWRldGVybWluYXRpb24gaGFzIGJlZW4gcmVjZWl2ZWQgYnV0IHByb2Nlc3NpbmcgaGFzIG5vdCBiZWd1bi5cclxuICAgKi9cclxuICBRdWV1ZWQ6IENvZGluZ0FyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIHZhbHVlIHNldCBpbmNsdWRlcyBDbGFpbSBQcm9jZXNzaW5nIE91dGNvbWUgY29kZXMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUmVtaXR0YW5jZU91dGNvbWVDb2RpbmdzOlJlbWl0dGFuY2VPdXRjb21lQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBjb21wbGV0ZTogVGhlIHByb2Nlc3NpbmcgaGFzIGNvbXBsZXRlZCB3aXRob3V0IGVycm9yc1xyXG4gICAqL1xyXG4gIFByb2Nlc3NpbmdDb21wbGV0ZToge1xyXG4gICAgZGlzcGxheTogXCJQcm9jZXNzaW5nIENvbXBsZXRlXCIsXHJcbiAgICBjb2RlOiBcImNvbXBsZXRlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9yZW1pdHRhbmNlLW91dGNvbWVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGVycm9yOiBPbmUgb3IgbW9yZSBlcnJvcnMgaGF2ZSBiZWVuIGRldGVjdGVkIGluIHRoZSBDbGFpbVxyXG4gICAqL1xyXG4gIEVycm9yOiB7XHJcbiAgICBkaXNwbGF5OiBcIkVycm9yXCIsXHJcbiAgICBjb2RlOiBcImVycm9yXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9yZW1pdHRhbmNlLW91dGNvbWVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHBhcnRpYWw6IE5vIGVycm9ycyBoYXZlIGJlZW4gZGV0ZWN0ZWQgaW4gdGhlIENsYWltIGFuZCBzb21lIG9mIHRoZSBhZGp1ZGljYXRpb24gaGFzIGJlZW4gcGVyZm9ybWVkLlxyXG4gICAqL1xyXG4gIFBhcnRpYWxQcm9jZXNzaW5nOiB7XHJcbiAgICBkaXNwbGF5OiBcIlBhcnRpYWwgUHJvY2Vzc2luZ1wiLFxyXG4gICAgY29kZTogXCJwYXJ0aWFsXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9yZW1pdHRhbmNlLW91dGNvbWVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHF1ZXVlZDogVGhlIENsYWltL1ByZS1hdXRob3JpemF0aW9uL1ByZS1kZXRlcm1pbmF0aW9uIGhhcyBiZWVuIHJlY2VpdmVkIGJ1dCBwcm9jZXNzaW5nIGhhcyBub3QgYmVndW4uXHJcbiAgICovXHJcbiAgUXVldWVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIlF1ZXVlZFwiLFxyXG4gICAgY29kZTogXCJxdWV1ZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3JlbWl0dGFuY2Utb3V0Y29tZVwiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==