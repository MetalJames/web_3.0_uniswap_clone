export const isOperationPending = (operationState) => 
    operationState.status === "PendingSignature" || operationState.status === "Mining";