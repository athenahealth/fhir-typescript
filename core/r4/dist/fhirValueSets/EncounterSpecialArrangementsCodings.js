// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/encounter-special-arrangements|4.0.1
/**
 * This value set defines a set of codes that can be used to indicate the kinds of special arrangements in place for a patients visit.
 */
export const EncounterSpecialArrangementsCodings = {
    /**
     * add-bed: An additional bed made available for a person accompanying the patient, for example a parent accompanying a child.
     */
    AdditionalBedding: {
        display: "Additional bedding",
        code: "add-bed",
        system: "http://terminology.hl7.org/CodeSystem/encounter-special-arrangements",
    },
    /**
     * att: A person who accompanies a patient to provide assistive services necessary for the patient's care during the encounter.
     */
    Attendant: {
        display: "Attendant",
        code: "att",
        system: "http://terminology.hl7.org/CodeSystem/encounter-special-arrangements",
    },
    /**
     * dog: The patient has a guide dog and the location used for the encounter should be able to support the presence of the service animal.
     */
    GuideDog: {
        display: "Guide dog",
        code: "dog",
        system: "http://terminology.hl7.org/CodeSystem/encounter-special-arrangements",
    },
    /**
     * int: The patient is not fluent in the local language and requires an interpreter to be available. Refer to the Patient.Language property for the type of interpreter required.
     */
    Interpreter: {
        display: "Interpreter",
        code: "int",
        system: "http://terminology.hl7.org/CodeSystem/encounter-special-arrangements",
    },
    /**
     * wheel: The patient requires a wheelchair to be made available for the encounter.
     */
    Wheelchair: {
        display: "Wheelchair",
        code: "wheel",
        system: "http://terminology.hl7.org/CodeSystem/encounter-special-arrangements",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5jb3VudGVyU3BlY2lhbEFycmFuZ2VtZW50c0NvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0VuY291bnRlclNwZWNpYWxBcnJhbmdlbWVudHNDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLG1GQUFtRjtBQThCbkY7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxtQ0FBbUMsR0FBMEM7SUFDeEY7O09BRUc7SUFDSCxpQkFBaUIsRUFBRTtRQUNqQixPQUFPLEVBQUUsb0JBQW9CO1FBQzdCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLHNFQUFzRTtLQUMvRTtJQUNEOztPQUVHO0lBQ0gsU0FBUyxFQUFFO1FBQ1QsT0FBTyxFQUFFLFdBQVc7UUFDcEIsSUFBSSxFQUFFLEtBQUs7UUFDWCxNQUFNLEVBQUUsc0VBQXNFO0tBQy9FO0lBQ0Q7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsV0FBVztRQUNwQixJQUFJLEVBQUUsS0FBSztRQUNYLE1BQU0sRUFBRSxzRUFBc0U7S0FDL0U7SUFDRDs7T0FFRztJQUNILFdBQVcsRUFBRTtRQUNYLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLElBQUksRUFBRSxLQUFLO1FBQ1gsTUFBTSxFQUFFLHNFQUFzRTtLQUMvRTtJQUNEOztPQUVHO0lBQ0gsVUFBVSxFQUFFO1FBQ1YsT0FBTyxFQUFFLFlBQVk7UUFDckIsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsc0VBQXNFO0tBQy9FO0NBQ08sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9lbmNvdW50ZXItc3BlY2lhbC1hcnJhbmdlbWVudHN8NC4wLjFcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBUaGlzIHZhbHVlIHNldCBkZWZpbmVzIGEgc2V0IG9mIGNvZGVzIHRoYXQgY2FuIGJlIHVzZWQgdG8gaW5kaWNhdGUgdGhlIGtpbmRzIG9mIHNwZWNpYWwgYXJyYW5nZW1lbnRzIGluIHBsYWNlIGZvciBhIHBhdGllbnRzIHZpc2l0LlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRW5jb3VudGVyU3BlY2lhbEFycmFuZ2VtZW50c0NvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogYWRkLWJlZDogQW4gYWRkaXRpb25hbCBiZWQgbWFkZSBhdmFpbGFibGUgZm9yIGEgcGVyc29uIGFjY29tcGFueWluZyB0aGUgcGF0aWVudCwgZm9yIGV4YW1wbGUgYSBwYXJlbnQgYWNjb21wYW55aW5nIGEgY2hpbGQuXHJcbiAgICovXHJcbiAgQWRkaXRpb25hbEJlZGRpbmc6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogYXR0OiBBIHBlcnNvbiB3aG8gYWNjb21wYW5pZXMgYSBwYXRpZW50IHRvIHByb3ZpZGUgYXNzaXN0aXZlIHNlcnZpY2VzIG5lY2Vzc2FyeSBmb3IgdGhlIHBhdGllbnQncyBjYXJlIGR1cmluZyB0aGUgZW5jb3VudGVyLlxyXG4gICAqL1xyXG4gIEF0dGVuZGFudDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBkb2c6IFRoZSBwYXRpZW50IGhhcyBhIGd1aWRlIGRvZyBhbmQgdGhlIGxvY2F0aW9uIHVzZWQgZm9yIHRoZSBlbmNvdW50ZXIgc2hvdWxkIGJlIGFibGUgdG8gc3VwcG9ydCB0aGUgcHJlc2VuY2Ugb2YgdGhlIHNlcnZpY2UgYW5pbWFsLlxyXG4gICAqL1xyXG4gIEd1aWRlRG9nOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGludDogVGhlIHBhdGllbnQgaXMgbm90IGZsdWVudCBpbiB0aGUgbG9jYWwgbGFuZ3VhZ2UgYW5kIHJlcXVpcmVzIGFuIGludGVycHJldGVyIHRvIGJlIGF2YWlsYWJsZS4gUmVmZXIgdG8gdGhlIFBhdGllbnQuTGFuZ3VhZ2UgcHJvcGVydHkgZm9yIHRoZSB0eXBlIG9mIGludGVycHJldGVyIHJlcXVpcmVkLlxyXG4gICAqL1xyXG4gIEludGVycHJldGVyOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHdoZWVsOiBUaGUgcGF0aWVudCByZXF1aXJlcyBhIHdoZWVsY2hhaXIgdG8gYmUgbWFkZSBhdmFpbGFibGUgZm9yIHRoZSBlbmNvdW50ZXIuXHJcbiAgICovXHJcbiAgV2hlZWxjaGFpcjogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgdmFsdWUgc2V0IGRlZmluZXMgYSBzZXQgb2YgY29kZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBpbmRpY2F0ZSB0aGUga2luZHMgb2Ygc3BlY2lhbCBhcnJhbmdlbWVudHMgaW4gcGxhY2UgZm9yIGEgcGF0aWVudHMgdmlzaXQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRW5jb3VudGVyU3BlY2lhbEFycmFuZ2VtZW50c0NvZGluZ3M6RW5jb3VudGVyU3BlY2lhbEFycmFuZ2VtZW50c0NvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogYWRkLWJlZDogQW4gYWRkaXRpb25hbCBiZWQgbWFkZSBhdmFpbGFibGUgZm9yIGEgcGVyc29uIGFjY29tcGFueWluZyB0aGUgcGF0aWVudCwgZm9yIGV4YW1wbGUgYSBwYXJlbnQgYWNjb21wYW55aW5nIGEgY2hpbGQuXHJcbiAgICovXHJcbiAgQWRkaXRpb25hbEJlZGRpbmc6IHtcclxuICAgIGRpc3BsYXk6IFwiQWRkaXRpb25hbCBiZWRkaW5nXCIsXHJcbiAgICBjb2RlOiBcImFkZC1iZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2VuY291bnRlci1zcGVjaWFsLWFycmFuZ2VtZW50c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogYXR0OiBBIHBlcnNvbiB3aG8gYWNjb21wYW5pZXMgYSBwYXRpZW50IHRvIHByb3ZpZGUgYXNzaXN0aXZlIHNlcnZpY2VzIG5lY2Vzc2FyeSBmb3IgdGhlIHBhdGllbnQncyBjYXJlIGR1cmluZyB0aGUgZW5jb3VudGVyLlxyXG4gICAqL1xyXG4gIEF0dGVuZGFudDoge1xyXG4gICAgZGlzcGxheTogXCJBdHRlbmRhbnRcIixcclxuICAgIGNvZGU6IFwiYXR0XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9lbmNvdW50ZXItc3BlY2lhbC1hcnJhbmdlbWVudHNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGRvZzogVGhlIHBhdGllbnQgaGFzIGEgZ3VpZGUgZG9nIGFuZCB0aGUgbG9jYXRpb24gdXNlZCBmb3IgdGhlIGVuY291bnRlciBzaG91bGQgYmUgYWJsZSB0byBzdXBwb3J0IHRoZSBwcmVzZW5jZSBvZiB0aGUgc2VydmljZSBhbmltYWwuXHJcbiAgICovXHJcbiAgR3VpZGVEb2c6IHtcclxuICAgIGRpc3BsYXk6IFwiR3VpZGUgZG9nXCIsXHJcbiAgICBjb2RlOiBcImRvZ1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vZW5jb3VudGVyLXNwZWNpYWwtYXJyYW5nZW1lbnRzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBpbnQ6IFRoZSBwYXRpZW50IGlzIG5vdCBmbHVlbnQgaW4gdGhlIGxvY2FsIGxhbmd1YWdlIGFuZCByZXF1aXJlcyBhbiBpbnRlcnByZXRlciB0byBiZSBhdmFpbGFibGUuIFJlZmVyIHRvIHRoZSBQYXRpZW50Lkxhbmd1YWdlIHByb3BlcnR5IGZvciB0aGUgdHlwZSBvZiBpbnRlcnByZXRlciByZXF1aXJlZC5cclxuICAgKi9cclxuICBJbnRlcnByZXRlcjoge1xyXG4gICAgZGlzcGxheTogXCJJbnRlcnByZXRlclwiLFxyXG4gICAgY29kZTogXCJpbnRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2VuY291bnRlci1zcGVjaWFsLWFycmFuZ2VtZW50c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogd2hlZWw6IFRoZSBwYXRpZW50IHJlcXVpcmVzIGEgd2hlZWxjaGFpciB0byBiZSBtYWRlIGF2YWlsYWJsZSBmb3IgdGhlIGVuY291bnRlci5cclxuICAgKi9cclxuICBXaGVlbGNoYWlyOiB7XHJcbiAgICBkaXNwbGF5OiBcIldoZWVsY2hhaXJcIixcclxuICAgIGNvZGU6IFwid2hlZWxcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2VuY291bnRlci1zcGVjaWFsLWFycmFuZ2VtZW50c1wiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==