**Change Detection**

**Default Change Detection:** 
Angular will check the parent and child component on every change detection cycle, even when the changes do not directly affect the component.

**OnPush Change Detection:** 
The child component only updates when the reference of the input data changes or when the child component emits an event.

**Dependency Injection**

**Hierarchical Dependency Injection:**

**Root-level Service:** 
The root service is accessible in both parent and child components since it is provided at the root level.

**Parent-level Service:** 
Only the parent and its children share the parent-level service.

**Child-level Service:** 
The child component has its own version of the service, different from the parent.