// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: MarketingStatus
import * as fhir from '../fhir.js';
/**
 * The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.
 */
export class MarketingStatus extends fhir.BackboneElement {
    /**
     * Default constructor for MarketingStatus - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['country']) {
            this.country = new fhir.CodeableConcept(source.country);
        }
        else {
            this.country = null;
        }
        if (source['jurisdiction']) {
            this.jurisdiction = new fhir.CodeableConcept(source.jurisdiction);
        }
        if (source['status']) {
            this.status = new fhir.CodeableConcept(source.status);
        }
        else {
            this.status = null;
        }
        if (source['dateRange']) {
            this.dateRange = new fhir.Period(source.dateRange);
        }
        else {
            this.dateRange = null;
        }
        if (source['restoreDate']) {
            this.restoreDate = new fhir.FhirDateTime({ value: source.restoreDate });
        }
        if (source['_restoreDate']) {
            if (this.restoreDate) {
                this.restoreDate.addExtendedProperties(source._restoreDate);
            }
            else {
                this.restoreDate = new fhir.FhirDateTime(source._restoreDate);
            }
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression = '') {
        let issues = super.doModelValidation(expression);
        if (expression === '') {
            expression = 'MarketingStatus';
        }
        if (!this['country']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property country fhir: MarketingStatus.country:CodeableConcept', expression: [expression] });
        }
        if (this["country"]) {
            issues.push(...this.country.doModelValidation(expression + '.country'));
        }
        if (this["jurisdiction"]) {
            issues.push(...this.jurisdiction.doModelValidation(expression + '.jurisdiction'));
        }
        if (!this['status']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property status fhir: MarketingStatus.status:CodeableConcept', expression: [expression] });
        }
        if (this["status"]) {
            issues.push(...this.status.doModelValidation(expression + '.status'));
        }
        if (!this['dateRange']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property dateRange fhir: MarketingStatus.dateRange:Period', expression: [expression] });
        }
        if (this["dateRange"]) {
            issues.push(...this.dateRange.doModelValidation(expression + '.dateRange'));
        }
        if (this["restoreDate"]) {
            issues.push(...this.restoreDate.doModelValidation(expression + '.restoreDate'));
        }
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
MarketingStatus._fts_dataType = 'MarketingStatus';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFya2V0aW5nU3RhdHVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9NYXJrZXRpbmdTdGF0dXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsb0NBQW9DO0FBRXBDLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBZ0NuQzs7R0FFRztBQUNILE1BQU0sT0FBTyxlQUFnQixTQUFRLElBQUksQ0FBQyxlQUFlO0lBeUJ2RDs7T0FFRztJQUNILFlBQVksU0FBc0MsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDNUYsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUFFO2FBQzlFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FBRTtRQUM3QixJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUFFO1FBQ2xHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQUU7YUFDM0U7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUFFO1FBQzVCLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FB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M0csT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7QUEvREQ7O0dBRUc7QUFDNkIsNkJBQWEsR0FBVSxpQkFBaUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBDb21wbGV4VHlwZTogTWFya2V0aW5nU3RhdHVzXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIE1hcmtldGluZ1N0YXR1cyB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBNYXJrZXRpbmdTdGF0dXNBcmdzIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBUaGUgY291bnRyeSBpbiB3aGljaCB0aGUgbWFya2V0aW5nIGF1dGhvcmlzYXRpb24gaGFzIGJlZW4gZ3JhbnRlZCBzaGFsbCBiZSBzcGVjaWZpZWQgSXQgc2hvdWxkIGJlIHNwZWNpZmllZCB1c2luZyB0aGUgSVNPIDMxNjYg4oCRIDEgYWxwaGEtMiBjb2RlIGVsZW1lbnRzLlxyXG4gICAqL1xyXG4gIGNvdW50cnk6IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIFdoZXJlIGEgTWVkaWNpbmVzIFJlZ3VsYXRvcnkgQWdlbmN5IGhhcyBncmFudGVkIGEgbWFya2V0aW5nIGF1dGhvcmlzYXRpb24gZm9yIHdoaWNoIHNwZWNpZmljIHByb3Zpc2lvbnMgd2l0aGluIGEganVyaXNkaWN0aW9uIGFwcGx5LCB0aGUganVyaXNkaWN0aW9uIGNhbiBiZSBzcGVjaWZpZWQgdXNpbmcgYW4gYXBwcm9wcmlhdGUgY29udHJvbGxlZCB0ZXJtaW5vbG9neSBUaGUgY29udHJvbGxlZCB0ZXJtIGFuZCB0aGUgY29udHJvbGxlZCB0ZXJtIGlkZW50aWZpZXIgc2hhbGwgYmUgc3BlY2lmaWVkLlxyXG4gICAqL1xyXG4gIGp1cmlzZGljdGlvbj86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBhdHRyaWJ1dGUgcHJvdmlkZXMgaW5mb3JtYXRpb24gb24gdGhlIHN0YXR1cyBvZiB0aGUgbWFya2V0aW5nIG9mIHRoZSBtZWRpY2luYWwgcHJvZHVjdCBTZWUgSVNPL1RTIDIwNDQzIGZvciBtb3JlIGluZm9ybWF0aW9uIGFuZCBleGFtcGxlcy5cclxuICAgKi9cclxuICBzdGF0dXM6IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkYXRlIHdoZW4gdGhlIE1lZGljaW5hbCBQcm9kdWN0IGlzIHBsYWNlZCBvbiB0aGUgbWFya2V0IGJ5IHRoZSBNYXJrZXRpbmcgQXV0aG9yaXNhdGlvbiBIb2xkZXIgKG9yIHdoZXJlIGFwcGxpY2FibGUsIHRoZSBtYW51ZmFjdHVyZXIvZGlzdHJpYnV0b3IpIGluIGEgY291bnRyeSBhbmQvb3IganVyaXNkaWN0aW9uIHNoYWxsIGJlIHByb3ZpZGVkIEEgY29tcGxldGUgZGF0ZSBjb25zaXN0aW5nIG9mIGRheSwgbW9udGggYW5kIHllYXIgc2hhbGwgYmUgc3BlY2lmaWVkIHVzaW5nIHRoZSBJU08gODYwMSBkYXRlIGZvcm1hdCBOT1RFIOKAnFBsYWNlZCBvbiB0aGUgbWFya2V04oCdIHJlZmVycyB0byB0aGUgcmVsZWFzZSBvZiB0aGUgTWVkaWNpbmFsIFByb2R1Y3QgaW50byB0aGUgZGlzdHJpYnV0aW9uIGNoYWluLlxyXG4gICAqL1xyXG4gIGRhdGVSYW5nZTogZmhpci5QZXJpb2RBcmdzfG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIGRhdGUgd2hlbiB0aGUgTWVkaWNpbmFsIFByb2R1Y3QgaXMgcGxhY2VkIG9uIHRoZSBtYXJrZXQgYnkgdGhlIE1hcmtldGluZyBBdXRob3Jpc2F0aW9uIEhvbGRlciAob3Igd2hlcmUgYXBwbGljYWJsZSwgdGhlIG1hbnVmYWN0dXJlci9kaXN0cmlidXRvcikgaW4gYSBjb3VudHJ5IGFuZC9vciBqdXJpc2RpY3Rpb24gc2hhbGwgYmUgcHJvdmlkZWQgQSBjb21wbGV0ZSBkYXRlIGNvbnNpc3Rpbmcgb2YgZGF5LCBtb250aCBhbmQgeWVhciBzaGFsbCBiZSBzcGVjaWZpZWQgdXNpbmcgdGhlIElTTyA4NjAxIGRhdGUgZm9ybWF0IE5PVEUg4oCcUGxhY2VkIG9uIHRoZSBtYXJrZXTigJ0gcmVmZXJzIHRvIHRoZSByZWxlYXNlIG9mIHRoZSBNZWRpY2luYWwgUHJvZHVjdCBpbnRvIHRoZSBkaXN0cmlidXRpb24gY2hhaW4uXHJcbiAgICovXHJcbiAgcmVzdG9yZURhdGU/OiBmaGlyLkZoaXJEYXRlVGltZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBNYXJrZXRpbmdTdGF0dXMucmVzdG9yZURhdGVcclxuICAgKi9cclxuICBfcmVzdG9yZURhdGU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIG1hcmtldGluZyBzdGF0dXMgZGVzY3JpYmVzIHRoZSBkYXRlIHdoZW4gYSBtZWRpY2luYWwgcHJvZHVjdCBpcyBhY3R1YWxseSBwdXQgb24gdGhlIG1hcmtldCBvciB0aGUgZGF0ZSBhcyBvZiB3aGljaCBpdCBpcyBubyBsb25nZXIgYXZhaWxhYmxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1hcmtldGluZ1N0YXR1cyBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ01hcmtldGluZ1N0YXR1cyc7XHJcbiAgLyoqXHJcbiAgICogVGhlIGNvdW50cnkgaW4gd2hpY2ggdGhlIG1hcmtldGluZyBhdXRob3Jpc2F0aW9uIGhhcyBiZWVuIGdyYW50ZWQgc2hhbGwgYmUgc3BlY2lmaWVkIEl0IHNob3VsZCBiZSBzcGVjaWZpZWQgdXNpbmcgdGhlIElTTyAzMTY2IOKAkSAxIGFscGhhLTIgY29kZSBlbGVtZW50cy5cclxuICAgKi9cclxuICBwdWJsaWMgY291bnRyeTogZmhpci5Db2RlYWJsZUNvbmNlcHR8bnVsbDtcclxuICAvKipcclxuICAgKiBXaGVyZSBhIE1lZGljaW5lcyBSZWd1bGF0b3J5IEFnZW5jeSBoYXMgZ3JhbnRlZCBhIG1hcmtldGluZyBhdXRob3Jpc2F0aW9uIGZvciB3aGljaCBzcGVjaWZpYyBwcm92aXNpb25zIHdpdGhpbiBhIGp1cmlzZGljdGlvbiBhcHBseSwgdGhlIGp1cmlzZGljdGlvbiBjYW4gYmUgc3BlY2lmaWVkIHVzaW5nIGFuIGFwcHJvcHJpYXRlIGNvbnRyb2xsZWQgdGVybWlub2xvZ3kgVGhlIGNvbnRyb2xsZWQgdGVybSBhbmQgdGhlIGNvbnRyb2xsZWQgdGVybSBpZGVudGlmaWVyIHNoYWxsIGJlIHNwZWNpZmllZC5cclxuICAgKi9cclxuICBwdWJsaWMganVyaXNkaWN0aW9uPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgYXR0cmlidXRlIHByb3ZpZGVzIGluZm9ybWF0aW9uIG9uIHRoZSBzdGF0dXMgb2YgdGhlIG1hcmtldGluZyBvZiB0aGUgbWVkaWNpbmFsIHByb2R1Y3QgU2VlIElTTy9UUyAyMDQ0MyBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhbmQgZXhhbXBsZXMuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXR1czogZmhpci5Db2RlYWJsZUNvbmNlcHR8bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUgZGF0ZSB3aGVuIHRoZSBNZWRpY2luYWwgUHJvZHVjdCBpcyBwbGFjZWQgb24gdGhlIG1hcmtldCBieSB0aGUgTWFya2V0aW5nIEF1dGhvcmlzYXRpb24gSG9sZGVyIChvciB3aGVyZSBhcHBsaWNhYmxlLCB0aGUgbWFudWZhY3R1cmVyL2Rpc3RyaWJ1dG9yKSBpbiBhIGNvdW50cnkgYW5kL29yIGp1cmlzZGljdGlvbiBzaGFsbCBiZSBwcm92aWRlZCBBIGNvbXBsZXRlIGRhdGUgY29uc2lzdGluZyBvZiBkYXksIG1vbnRoIGFuZCB5ZWFyIHNoYWxsIGJlIHNwZWNpZmllZCB1c2luZyB0aGUgSVNPIDg2MDEgZGF0ZSBmb3JtYXQgTk9URSDigJxQbGFjZWQgb24gdGhlIG1hcmtldOKAnSByZWZlcnMgdG8gdGhlIHJlbGVhc2Ugb2YgdGhlIE1lZGljaW5hbCBQcm9kdWN0IGludG8gdGhlIGRpc3RyaWJ1dGlvbiBjaGFpbi5cclxuICAgKi9cclxuICBwdWJsaWMgZGF0ZVJhbmdlOiBmaGlyLlBlcmlvZHxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkYXRlIHdoZW4gdGhlIE1lZGljaW5hbCBQcm9kdWN0IGlzIHBsYWNlZCBvbiB0aGUgbWFya2V0IGJ5IHRoZSBNYXJrZXRpbmcgQXV0aG9yaXNhdGlvbiBIb2xkZXIgKG9yIHdoZXJlIGFwcGxpY2FibGUsIHRoZSBtYW51ZmFjdHVyZXIvZGlzdHJpYnV0b3IpIGluIGEgY291bnRyeSBhbmQvb3IganVyaXNkaWN0aW9uIHNoYWxsIGJlIHByb3ZpZGVkIEEgY29tcGxldGUgZGF0ZSBjb25zaXN0aW5nIG9mIGRheSwgbW9udGggYW5kIHllYXIgc2hhbGwgYmUgc3BlY2lmaWVkIHVzaW5nIHRoZSBJU08gODYwMSBkYXRlIGZvcm1hdCBOT1RFIOKAnFBsYWNlZCBvbiB0aGUgbWFya2V04oCdIHJlZmVycyB0byB0aGUgcmVsZWFzZSBvZiB0aGUgTWVkaWNpbmFsIFByb2R1Y3QgaW50byB0aGUgZGlzdHJpYnV0aW9uIGNoYWluLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZXN0b3JlRGF0ZT86IGZoaXIuRmhpckRhdGVUaW1lfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBNYXJrZXRpbmdTdGF0dXMgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxNYXJrZXRpbmdTdGF0dXNBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnY291bnRyeSddKSB7IHRoaXMuY291bnRyeSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UuY291bnRyeSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmNvdW50cnkgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydqdXJpc2RpY3Rpb24nXSkgeyB0aGlzLmp1cmlzZGljdGlvbiA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UuanVyaXNkaWN0aW9uKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3RhdHVzJ10pIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLnN0YXR1cyk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnN0YXR1cyA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ2RhdGVSYW5nZSddKSB7IHRoaXMuZGF0ZVJhbmdlID0gbmV3IGZoaXIuUGVyaW9kKHNvdXJjZS5kYXRlUmFuZ2UpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5kYXRlUmFuZ2UgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydyZXN0b3JlRGF0ZSddKSB7IHRoaXMucmVzdG9yZURhdGUgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoe3ZhbHVlOiBzb3VyY2UucmVzdG9yZURhdGV9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3Jlc3RvcmVEYXRlJ10pIHtcclxuICAgICAgaWYgKHRoaXMucmVzdG9yZURhdGUpIHsgdGhpcy5yZXN0b3JlRGF0ZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9yZXN0b3JlRGF0ZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnJlc3RvcmVEYXRlID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHNvdXJjZS5fcmVzdG9yZURhdGUgYXMgUGFydGlhbDxmaGlyLkZoaXJEYXRlVGltZUFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwcmVzc2lvbjpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwcmVzc2lvbik7XHJcbiAgICBpZiAoZXhwcmVzc2lvbiA9PT0gJycpIHsgZXhwcmVzc2lvbiA9ICdNYXJrZXRpbmdTdGF0dXMnIH1cclxuICAgIGlmICghdGhpc1snY291bnRyeSddKSB7XHJcbiAgICAgIGlzc3Vlcy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIGNvZGU6ICdyZXF1aXJlZCcsIGRpYWdub3N0aWNzOiAnTWlzc2luZyByZXF1aXJlZCBwcm9wZXJ0eSBjb3VudHJ5IGZoaXI6IE1hcmtldGluZ1N0YXR1cy5jb3VudHJ5OkNvZGVhYmxlQ29uY2VwdCcsIGV4cHJlc3Npb246IFtleHByZXNzaW9uXSB9KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzW1wiY291bnRyeVwiXSkgeyBpc3N1ZXMucHVzaCguLi50aGlzLmNvdW50cnkuZG9Nb2RlbFZhbGlkYXRpb24oZXhwcmVzc2lvbisnLmNvdW50cnknKSk7IH1cclxuICAgIGlmICh0aGlzW1wianVyaXNkaWN0aW9uXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMuanVyaXNkaWN0aW9uLmRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb24rJy5qdXJpc2RpY3Rpb24nKSk7IH1cclxuICAgIGlmICghdGhpc1snc3RhdHVzJ10pIHtcclxuICAgICAgaXNzdWVzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgY29kZTogJ3JlcXVpcmVkJywgZGlhZ25vc3RpY3M6ICdNaXNzaW5nIHJlcXVpcmVkIHByb3BlcnR5IHN0YXR1cyBmaGlyOiBNYXJrZXRpbmdTdGF0dXMuc3RhdHVzOkNvZGVhYmxlQ29uY2VwdCcsIGV4cHJlc3Npb246IFtleHByZXNzaW9uXSB9KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzW1wic3RhdHVzXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMuc3RhdHVzLmRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb24rJy5zdGF0dXMnKSk7IH1cclxuICAgIGlmICghdGhpc1snZGF0ZVJhbmdlJ10pIHtcclxuICAgICAgaXNzdWVzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgY29kZTogJ3JlcXVpcmVkJywgZGlhZ25vc3RpY3M6ICdNaXNzaW5nIHJlcXVpcmVkIHByb3BlcnR5IGRhdGVSYW5nZSBmaGlyOiBNYXJrZXRpbmdTdGF0dXMuZGF0ZVJhbmdlOlBlcmlvZCcsIGV4cHJlc3Npb246IFtleHByZXNzaW9uXSB9KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzW1wiZGF0ZVJhbmdlXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMuZGF0ZVJhbmdlLmRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb24rJy5kYXRlUmFuZ2UnKSk7IH1cclxuICAgIGlmICh0aGlzW1wicmVzdG9yZURhdGVcIl0pIHsgaXNzdWVzLnB1c2goLi4udGhpcy5yZXN0b3JlRGF0ZS5kb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uKycucmVzdG9yZURhdGUnKSk7IH1cclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==