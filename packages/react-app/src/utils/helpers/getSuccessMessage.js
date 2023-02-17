export const isOperationPending = (operationState) => 
    operationState.status === "PendingSignature" || operationState.status === "Mining";
export const isOperationFailed = (operationState) =>
    operationState.status === "Fail" || operationState.status === "Exception";
export const isOperationSucceeded = (operationState) =>
    operationState.status === "Success";



export const getSuccessMessage = (swapApproveState, swapExecuteState) => {
    if (isOperationPending(swapExecuteState) ||isOperationPending(swapApproveState)) {
        return undefined;
    }

    if (isOperationSucceeded(swapExecuteState)) {
        return "Swap executed successfully";
    }

    if (isOperationSucceeded(swapApproveState)) {
        return "Approval successful";
    }

    return undefined;
};