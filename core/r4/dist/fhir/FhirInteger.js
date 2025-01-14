// Minimum TypeScript Version: 3.7
// FHIR Primitive: integer
import * as fhir from '../fhir.js';
/**
 * 32 bit number; for values larger than this, use decimal
 */
export class FhirInteger extends fhir.FhirPrimitive {
    /**
       * Create a FhirInteger
       * @param value 32 bit number; for values larger than this, use decimal
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    constructor(source = {}, options = {}) {
        super(source, options);
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression = '') {
        let issues = super.doModelValidation(expression);
        if ((this.value !== undefined) && (this.value !== null) && ((typeof this.value !== 'number') || (!Number.isInteger(this.value)) || (!FhirInteger._fts_regex.test(this.value.toString())))) {
            issues.push({ severity: 'error', code: 'invalid', diagnostics: 'Invalid value in primitive type integer', expression: [expression] });
        }
        return issues;
    }
    /**
     * Returns a string representation of an object.
     * @param radix Specifies a radix for converting numeric values to strings. This value is only used for numbers.
     */
    toString(radix) { return (this.value ?? NaN).toString(radix); }
    /**
     * Returns a string representing a number in fixed-point notation.
     * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
     */
    toFixed(fractionDigits) { return (this.value ?? NaN).toFixed(fractionDigits); }
    /**
     * Returns a string containing a number represented in exponential notation.
     * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
     */
    toExponential(fractionDigits) { return (this.value ?? NaN).toExponential(fractionDigits); }
    /**
     * Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
     * @param precision Number of significant digits. Must be in the range 1 - 21, inclusive.
     */
    toPrecision(precision) { return (this.value ?? NaN).toPrecision(precision); }
    /**
     * Returns the primitive value of the specified object.
     */
    valueOf() { return (this.value ?? NaN); }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
FhirInteger._fts_dataType = 'Integer';
/**
 * Mapping of this datatype to a JSON equivalent
 */
FhirInteger._fts_jsonType = 'number';
// published regex: -?([0]|([1-9][0-9]*))
FhirInteger._fts_regex = /^-?([0]|([1-9][0-9]*))$/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmhpckludGVnZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL0ZoaXJJbnRlZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtDQUFrQztBQUNsQywwQkFBMEI7QUFFMUIsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFZbkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sV0FBWSxTQUFRLElBQUksQ0FBQyxhQUFhO0lBZWpEOzs7Ozs7TUFNRTtJQUNGLFlBQVksU0FBa0MsRUFBRSxFQUFFLFVBQXNDLEVBQUc7UUFDekYsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUIsQ0FBQyxhQUFvQixFQUFFO1FBQ3RELElBQUksTUFBTSxHQUFtQixLQUFLLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDekwsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUseUNBQXlDLEVBQUUsVUFBVSxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUMsQ0FBQyxDQUFDO1NBQ3RJO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUNEOzs7T0FHRztJQUNhLFFBQVEsQ0FBQyxLQUFhLElBQVcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5Rjs7O09BR0c7SUFDSSxPQUFPLENBQUMsY0FBc0IsSUFBVyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JHOzs7T0FHRztJQUNJLGFBQWEsQ0FBQyxjQUFzQixJQUFXLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakg7OztPQUdHO0lBQ0ksV0FBVyxDQUFDLFNBQWlCLElBQVcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRzs7T0FFRztJQUNhLE9BQU8sS0FBWSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBekRoRTs7R0FFRztBQUM2Qix5QkFBYSxHQUFVLFNBQVMsQ0FBQztBQUNqRTs7R0FFRztBQUM2Qix5QkFBYSxHQUFVLFFBQVEsQ0FBQztBQUNoRSx5Q0FBeUM7QUFDVCxzQkFBVSxHQUFVLHlCQUF5QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFByaW1pdGl2ZTogaW50ZWdlclxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8qKlxyXG4gKiAzMiBiaXQgbnVtYmVyOyBmb3IgdmFsdWVzIGxhcmdlciB0aGFuIHRoaXMsIHVzZSBkZWNpbWFsXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZoaXJJbnRlZ2VyQXJncyBleHRlbmRzIGZoaXIuRmhpclByaW1pdGl2ZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIDMyIGJpdCBudW1iZXI7IGZvciB2YWx1ZXMgbGFyZ2VyIHRoYW4gdGhpcywgdXNlIGRlY2ltYWxcclxuICAgKi9cclxuICB2YWx1ZT86RmhpckludGVnZXJ8bnVtYmVyfHVuZGVmaW5lZHxudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogMzIgYml0IG51bWJlcjsgZm9yIHZhbHVlcyBsYXJnZXIgdGhhbiB0aGlzLCB1c2UgZGVjaW1hbFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZoaXJJbnRlZ2VyIGV4dGVuZHMgZmhpci5GaGlyUHJpbWl0aXZlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0ludGVnZXInO1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEpTT04gZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19qc29uVHlwZTpzdHJpbmcgPSAnbnVtYmVyJztcclxuICAvLyBwdWJsaXNoZWQgcmVnZXg6IC0/KFswXXwoWzEtOV1bMC05XSopKVxyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19yZWdleDpSZWdFeHAgPSAvXi0/KFswXXwoWzEtOV1bMC05XSopKSQvXHJcbiAgLyoqXHJcbiAgICogQSBpbnRlZ2VyIHZhbHVlLCByZXByZXNlbnRlZCBhcyBhIEpTIG51bWJlclxyXG4gICAqL1xyXG4gIGRlY2xhcmUgdmFsdWU/Om51bWJlcnxudWxsfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgICAqIENyZWF0ZSBhIEZoaXJJbnRlZ2VyXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgMzIgYml0IG51bWJlcjsgZm9yIHZhbHVlcyBsYXJnZXIgdGhhbiB0aGlzLCB1c2UgZGVjaW1hbFxyXG4gICAgICogQHBhcmFtIGlkIFVuaXF1ZSBpZCBmb3IgaW50ZXItZWxlbWVudCByZWZlcmVuY2luZyAodW5jb21tb24gb24gcHJpbWl0aXZlcylcclxuICAgICAqIEBwYXJhbSBleHRlbnNpb24gQWRkaXRpb25hbCBjb250ZW50IGRlZmluZWQgYnkgaW1wbGVtZW50YXRpb25zXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIHRvIHBhc3MgdG8gZXh0ZW5zaW9uIGNvbnN0cnVjdG9yc1xyXG4gICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8RmhpckludGVnZXJBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHsgfSApIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uKTtcclxuICAgIGlmICgodGhpcy52YWx1ZSAhPT0gdW5kZWZpbmVkKSAmJiAodGhpcy52YWx1ZSAhPT0gbnVsbCkgJiYgKCh0eXBlb2YgdGhpcy52YWx1ZSAhPT0gJ251bWJlcicpIHx8ICghTnVtYmVyLmlzSW50ZWdlcih0aGlzLnZhbHVlKSkgfHwgKCFGaGlySW50ZWdlci5fZnRzX3JlZ2V4LnRlc3QodGhpcy52YWx1ZS50b1N0cmluZygpKSkpKSB7XHJcbiAgICAgIGlzc3Vlcy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIGNvZGU6ICdpbnZhbGlkJywgZGlhZ25vc3RpY3M6ICdJbnZhbGlkIHZhbHVlIGluIHByaW1pdGl2ZSB0eXBlIGludGVnZXInLCBleHByZXNzaW9uOiBbZXhwcmVzc2lvbl19KTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYW4gb2JqZWN0LlxyXG4gICAqIEBwYXJhbSByYWRpeCBTcGVjaWZpZXMgYSByYWRpeCBmb3IgY29udmVydGluZyBudW1lcmljIHZhbHVlcyB0byBzdHJpbmdzLiBUaGlzIHZhbHVlIGlzIG9ubHkgdXNlZCBmb3IgbnVtYmVycy5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgdG9TdHJpbmcocmFkaXg/Om51bWJlcik6c3RyaW5nIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/IE5hTikudG9TdHJpbmcocmFkaXgpOyB9XHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRpbmcgYSBudW1iZXIgaW4gZml4ZWQtcG9pbnQgbm90YXRpb24uXHJcbiAgICogQHBhcmFtIGZyYWN0aW9uRGlnaXRzIE51bWJlciBvZiBkaWdpdHMgYWZ0ZXIgdGhlIGRlY2ltYWwgcG9pbnQuIE11c3QgYmUgaW4gdGhlIHJhbmdlIDAgLSAyMCwgaW5jbHVzaXZlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0b0ZpeGVkKGZyYWN0aW9uRGlnaXRzPzpudW1iZXIpOnN0cmluZyB7IHJldHVybiAodGhpcy52YWx1ZSA/PyBOYU4pLnRvRml4ZWQoZnJhY3Rpb25EaWdpdHMpOyB9XHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhIHN0cmluZyBjb250YWluaW5nIGEgbnVtYmVyIHJlcHJlc2VudGVkIGluIGV4cG9uZW50aWFsIG5vdGF0aW9uLlxyXG4gICAqIEBwYXJhbSBmcmFjdGlvbkRpZ2l0cyBOdW1iZXIgb2YgZGlnaXRzIGFmdGVyIHRoZSBkZWNpbWFsIHBvaW50LiBNdXN0IGJlIGluIHRoZSByYW5nZSAwIC0gMjAsIGluY2x1c2l2ZS5cclxuICAgKi9cclxuICBwdWJsaWMgdG9FeHBvbmVudGlhbChmcmFjdGlvbkRpZ2l0cz86bnVtYmVyKTpzdHJpbmcgeyByZXR1cm4gKHRoaXMudmFsdWUgPz8gTmFOKS50b0V4cG9uZW50aWFsKGZyYWN0aW9uRGlnaXRzKTsgfVxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYSBzdHJpbmcgY29udGFpbmluZyBhIG51bWJlciByZXByZXNlbnRlZCBlaXRoZXIgaW4gZXhwb25lbnRpYWwgb3IgZml4ZWQtcG9pbnQgbm90YXRpb24gd2l0aCBhIHNwZWNpZmllZCBudW1iZXIgb2YgZGlnaXRzLlxyXG4gICAqIEBwYXJhbSBwcmVjaXNpb24gTnVtYmVyIG9mIHNpZ25pZmljYW50IGRpZ2l0cy4gTXVzdCBiZSBpbiB0aGUgcmFuZ2UgMSAtIDIxLCBpbmNsdXNpdmUuXHJcbiAgICovXHJcbiAgcHVibGljIHRvUHJlY2lzaW9uKHByZWNpc2lvbj86bnVtYmVyKTpzdHJpbmcgeyByZXR1cm4gKHRoaXMudmFsdWUgPz8gTmFOKS50b1ByZWNpc2lvbihwcmVjaXNpb24pOyB9XHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgcHJpbWl0aXZlIHZhbHVlIG9mIHRoZSBzcGVjaWZpZWQgb2JqZWN0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSB2YWx1ZU9mKCk6bnVtYmVyIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/IE5hTik7IH1cclxufVxyXG4iXX0=