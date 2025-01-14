// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/care-team-status|4.0.1
/**
 * Indicates the status of the care team.
 */
export const CareTeamStatusCodings = {
    /**
     * active: The care team is currently participating in the coordination and delivery of care.
     */
    Active: {
        display: "Active",
        code: "active",
        system: "http://hl7.org/fhir/care-team-status",
    },
    /**
     * entered-in-error: The care team should have never existed.
     */
    EnteredInError: {
        display: "Entered in Error",
        code: "entered-in-error",
        system: "http://hl7.org/fhir/care-team-status",
    },
    /**
     * inactive: The care team was, but is no longer, participating in the coordination and delivery of care.
     */
    Inactive: {
        display: "Inactive",
        code: "inactive",
        system: "http://hl7.org/fhir/care-team-status",
    },
    /**
     * proposed: The care team has been drafted and proposed, but not yet participating in the coordination and delivery of patient care.
     */
    Proposed: {
        display: "Proposed",
        code: "proposed",
        system: "http://hl7.org/fhir/care-team-status",
    },
    /**
     * suspended: The care team is temporarily on hold or suspended and not participating in the coordination and delivery of care.
     */
    Suspended: {
        display: "Suspended",
        code: "suspended",
        system: "http://hl7.org/fhir/care-team-status",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZVRlYW1TdGF0dXNDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9DYXJlVGVhbVN0YXR1c0NvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMscUVBQXFFO0FBOEJyRTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUE0QjtJQUM1RDs7T0FFRztJQUNILE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLHNDQUFzQztLQUMvQztJQUNEOztPQUVHO0lBQ0gsY0FBYyxFQUFFO1FBQ2QsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLE1BQU0sRUFBRSxzQ0FBc0M7S0FDL0M7SUFDRDs7T0FFRztJQUNILFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxVQUFVO1FBQ25CLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSxzQ0FBc0M7S0FDL0M7SUFDRDs7T0FFRztJQUNILFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxVQUFVO1FBQ25CLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSxzQ0FBc0M7S0FDL0M7SUFDRDs7T0FFRztJQUNILFNBQVMsRUFBRTtRQUNULE9BQU8sRUFBRSxXQUFXO1FBQ3BCLElBQUksRUFBRSxXQUFXO1FBQ2pCLE1BQU0sRUFBRSxzQ0FBc0M7S0FDL0M7Q0FDTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2NhcmUtdGVhbS1zdGF0dXN8NC4wLjFcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBJbmRpY2F0ZXMgdGhlIHN0YXR1cyBvZiB0aGUgY2FyZSB0ZWFtLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ2FyZVRlYW1TdGF0dXNDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGFjdGl2ZTogVGhlIGNhcmUgdGVhbSBpcyBjdXJyZW50bHkgcGFydGljaXBhdGluZyBpbiB0aGUgY29vcmRpbmF0aW9uIGFuZCBkZWxpdmVyeSBvZiBjYXJlLlxyXG4gICAqL1xyXG4gIEFjdGl2ZTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBlbnRlcmVkLWluLWVycm9yOiBUaGUgY2FyZSB0ZWFtIHNob3VsZCBoYXZlIG5ldmVyIGV4aXN0ZWQuXHJcbiAgICovXHJcbiAgRW50ZXJlZEluRXJyb3I6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogaW5hY3RpdmU6IFRoZSBjYXJlIHRlYW0gd2FzLCBidXQgaXMgbm8gbG9uZ2VyLCBwYXJ0aWNpcGF0aW5nIGluIHRoZSBjb29yZGluYXRpb24gYW5kIGRlbGl2ZXJ5IG9mIGNhcmUuXHJcbiAgICovXHJcbiAgSW5hY3RpdmU6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogcHJvcG9zZWQ6IFRoZSBjYXJlIHRlYW0gaGFzIGJlZW4gZHJhZnRlZCBhbmQgcHJvcG9zZWQsIGJ1dCBub3QgeWV0IHBhcnRpY2lwYXRpbmcgaW4gdGhlIGNvb3JkaW5hdGlvbiBhbmQgZGVsaXZlcnkgb2YgcGF0aWVudCBjYXJlLlxyXG4gICAqL1xyXG4gIFByb3Bvc2VkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHN1c3BlbmRlZDogVGhlIGNhcmUgdGVhbSBpcyB0ZW1wb3JhcmlseSBvbiBob2xkIG9yIHN1c3BlbmRlZCBhbmQgbm90IHBhcnRpY2lwYXRpbmcgaW4gdGhlIGNvb3JkaW5hdGlvbiBhbmQgZGVsaXZlcnkgb2YgY2FyZS5cclxuICAgKi9cclxuICBTdXNwZW5kZWQ6IENvZGluZ0FyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbmRpY2F0ZXMgdGhlIHN0YXR1cyBvZiB0aGUgY2FyZSB0ZWFtLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENhcmVUZWFtU3RhdHVzQ29kaW5nczpDYXJlVGVhbVN0YXR1c0NvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogYWN0aXZlOiBUaGUgY2FyZSB0ZWFtIGlzIGN1cnJlbnRseSBwYXJ0aWNpcGF0aW5nIGluIHRoZSBjb29yZGluYXRpb24gYW5kIGRlbGl2ZXJ5IG9mIGNhcmUuXHJcbiAgICovXHJcbiAgQWN0aXZlOiB7XHJcbiAgICBkaXNwbGF5OiBcIkFjdGl2ZVwiLFxyXG4gICAgY29kZTogXCJhY3RpdmVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2NhcmUtdGVhbS1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGVudGVyZWQtaW4tZXJyb3I6IFRoZSBjYXJlIHRlYW0gc2hvdWxkIGhhdmUgbmV2ZXIgZXhpc3RlZC5cclxuICAgKi9cclxuICBFbnRlcmVkSW5FcnJvcjoge1xyXG4gICAgZGlzcGxheTogXCJFbnRlcmVkIGluIEVycm9yXCIsXHJcbiAgICBjb2RlOiBcImVudGVyZWQtaW4tZXJyb3JcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2NhcmUtdGVhbS1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGluYWN0aXZlOiBUaGUgY2FyZSB0ZWFtIHdhcywgYnV0IGlzIG5vIGxvbmdlciwgcGFydGljaXBhdGluZyBpbiB0aGUgY29vcmRpbmF0aW9uIGFuZCBkZWxpdmVyeSBvZiBjYXJlLlxyXG4gICAqL1xyXG4gIEluYWN0aXZlOiB7XHJcbiAgICBkaXNwbGF5OiBcIkluYWN0aXZlXCIsXHJcbiAgICBjb2RlOiBcImluYWN0aXZlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9jYXJlLXRlYW0tc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBwcm9wb3NlZDogVGhlIGNhcmUgdGVhbSBoYXMgYmVlbiBkcmFmdGVkIGFuZCBwcm9wb3NlZCwgYnV0IG5vdCB5ZXQgcGFydGljaXBhdGluZyBpbiB0aGUgY29vcmRpbmF0aW9uIGFuZCBkZWxpdmVyeSBvZiBwYXRpZW50IGNhcmUuXHJcbiAgICovXHJcbiAgUHJvcG9zZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiUHJvcG9zZWRcIixcclxuICAgIGNvZGU6IFwicHJvcG9zZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2NhcmUtdGVhbS1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHN1c3BlbmRlZDogVGhlIGNhcmUgdGVhbSBpcyB0ZW1wb3JhcmlseSBvbiBob2xkIG9yIHN1c3BlbmRlZCBhbmQgbm90IHBhcnRpY2lwYXRpbmcgaW4gdGhlIGNvb3JkaW5hdGlvbiBhbmQgZGVsaXZlcnkgb2YgY2FyZS5cclxuICAgKi9cclxuICBTdXNwZW5kZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiU3VzcGVuZGVkXCIsXHJcbiAgICBjb2RlOiBcInN1c3BlbmRlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvY2FyZS10ZWFtLXN0YXR1c1wiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==