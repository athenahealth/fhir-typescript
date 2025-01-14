// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/adjudication|4.0.1
/**
 * This value set includes a smattering of Adjudication Value codes which includes codes to indicate the amounts eligible under the plan, the amount of benefit, copays etc.
 */
export const AdjudicationCodes = {
    /**
     * benefit: Amount payable under the coverage
     */
    BenefitAmount: "benefit",
    /**
     * copay: Patient Co-Payment
     */
    CoPay: "copay",
    /**
     * deductible: Amount deducted from the eligible amount prior to adjudication.
     */
    Deductible: "deductible",
    /**
     * eligible: Amount of the change which is considered for adjudication.
     */
    EligibleAmount: "eligible",
    /**
     * eligpercent: Eligible Percentage.
     */
    EligiblePercent: "eligpercent",
    /**
     * submitted: The total submitted amount for the claim or group or line item.
     */
    SubmittedAmount: "submitted",
    /**
     * tax: The amount of tax.
     */
    Tax: "tax",
    /**
     * unallocdeduct: The amount of deductible which could not allocated to other line items.
     */
    UnallocatedDeductible: "unallocdeduct",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRqdWRpY2F0aW9uQ29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0FkanVkaWNhdGlvbkNvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLGlFQUFpRTtBQUVqRTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHO0lBQy9COztPQUVHO0lBQ0gsYUFBYSxFQUFFLFNBQVM7SUFDeEI7O09BRUc7SUFDSCxLQUFLLEVBQUUsT0FBTztJQUNkOztPQUVHO0lBQ0gsVUFBVSxFQUFFLFlBQVk7SUFDeEI7O09BRUc7SUFDSCxjQUFjLEVBQUUsVUFBVTtJQUMxQjs7T0FFRztJQUNILGVBQWUsRUFBRSxhQUFhO0lBQzlCOztPQUVHO0lBQ0gsZUFBZSxFQUFFLFdBQVc7SUFDNUI7O09BRUc7SUFDSCxHQUFHLEVBQUUsS0FBSztJQUNWOztPQUVHO0lBQ0gscUJBQXFCLEVBQUUsZUFBZTtDQUM5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2FkanVkaWNhdGlvbnw0LjAuMVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgdmFsdWUgc2V0IGluY2x1ZGVzIGEgc21hdHRlcmluZyBvZiBBZGp1ZGljYXRpb24gVmFsdWUgY29kZXMgd2hpY2ggaW5jbHVkZXMgY29kZXMgdG8gaW5kaWNhdGUgdGhlIGFtb3VudHMgZWxpZ2libGUgdW5kZXIgdGhlIHBsYW4sIHRoZSBhbW91bnQgb2YgYmVuZWZpdCwgY29wYXlzIGV0Yy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBBZGp1ZGljYXRpb25Db2RlcyA9IHtcclxuICAvKipcclxuICAgKiBiZW5lZml0OiBBbW91bnQgcGF5YWJsZSB1bmRlciB0aGUgY292ZXJhZ2VcclxuICAgKi9cclxuICBCZW5lZml0QW1vdW50OiBcImJlbmVmaXRcIixcclxuICAvKipcclxuICAgKiBjb3BheTogUGF0aWVudCBDby1QYXltZW50XHJcbiAgICovXHJcbiAgQ29QYXk6IFwiY29wYXlcIixcclxuICAvKipcclxuICAgKiBkZWR1Y3RpYmxlOiBBbW91bnQgZGVkdWN0ZWQgZnJvbSB0aGUgZWxpZ2libGUgYW1vdW50IHByaW9yIHRvIGFkanVkaWNhdGlvbi5cclxuICAgKi9cclxuICBEZWR1Y3RpYmxlOiBcImRlZHVjdGlibGVcIixcclxuICAvKipcclxuICAgKiBlbGlnaWJsZTogQW1vdW50IG9mIHRoZSBjaGFuZ2Ugd2hpY2ggaXMgY29uc2lkZXJlZCBmb3IgYWRqdWRpY2F0aW9uLlxyXG4gICAqL1xyXG4gIEVsaWdpYmxlQW1vdW50OiBcImVsaWdpYmxlXCIsXHJcbiAgLyoqXHJcbiAgICogZWxpZ3BlcmNlbnQ6IEVsaWdpYmxlIFBlcmNlbnRhZ2UuXHJcbiAgICovXHJcbiAgRWxpZ2libGVQZXJjZW50OiBcImVsaWdwZXJjZW50XCIsXHJcbiAgLyoqXHJcbiAgICogc3VibWl0dGVkOiBUaGUgdG90YWwgc3VibWl0dGVkIGFtb3VudCBmb3IgdGhlIGNsYWltIG9yIGdyb3VwIG9yIGxpbmUgaXRlbS5cclxuICAgKi9cclxuICBTdWJtaXR0ZWRBbW91bnQ6IFwic3VibWl0dGVkXCIsXHJcbiAgLyoqXHJcbiAgICogdGF4OiBUaGUgYW1vdW50IG9mIHRheC5cclxuICAgKi9cclxuICBUYXg6IFwidGF4XCIsXHJcbiAgLyoqXHJcbiAgICogdW5hbGxvY2RlZHVjdDogVGhlIGFtb3VudCBvZiBkZWR1Y3RpYmxlIHdoaWNoIGNvdWxkIG5vdCBhbGxvY2F0ZWQgdG8gb3RoZXIgbGluZSBpdGVtcy5cclxuICAgKi9cclxuICBVbmFsbG9jYXRlZERlZHVjdGlibGU6IFwidW5hbGxvY2RlZHVjdFwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgdmFsdWUgc2V0IGluY2x1ZGVzIGEgc21hdHRlcmluZyBvZiBBZGp1ZGljYXRpb24gVmFsdWUgY29kZXMgd2hpY2ggaW5jbHVkZXMgY29kZXMgdG8gaW5kaWNhdGUgdGhlIGFtb3VudHMgZWxpZ2libGUgdW5kZXIgdGhlIHBsYW4sIHRoZSBhbW91bnQgb2YgYmVuZWZpdCwgY29wYXlzIGV0Yy5cclxuICovXHJcbmV4cG9ydCB0eXBlIEFkanVkaWNhdGlvbkNvZGVUeXBlID0gdHlwZW9mIEFkanVkaWNhdGlvbkNvZGVzW2tleW9mIHR5cGVvZiBBZGp1ZGljYXRpb25Db2Rlc107XHJcbiJdfQ==