export const isOperationFailed = (operationState) =>
    operationState.status === "Fail" || operationState.status === "Exception";