import { useMoralis, useNativeBalance } from "react-moralis";

function NativeBalance(props) {
  const { data: balance } = useNativeBalance(props);
  const { account, isAuthenticated } = useMoralis();

<<<<<<< HEAD
  if (!account || !isAuthenticated) return null;

=======
>>>>>>> 6dad8e2ccb53543882e8f543c7f932272f7ca374
  return (
    <div style={{ textAlign: "center", whiteSpace: "nowrap" }}>
      {balance.formatted}
    </div>
  );
}

export default NativeBalance;
