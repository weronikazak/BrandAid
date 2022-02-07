import { Button, Card, Form, Input } from "antd";
import Text from "antd/lib/typography/Text";

const ContractMethods = ({ displayedContractFunctions, responses }) => {
  return displayedContractFunctions.map((item, key) => (
    <Card
<<<<<<< HEAD
      title={`${key + 1}. ${item?.name}`}
      size="small"
      style={{ marginBottom: "20px" }}
      key={key}
=======
      title={`${key + 1} ${item?.name}`}
      key={key}
      size="small"
      style={{ marginBottom: "20px" }}
>>>>>>> 6dad8e2ccb53543882e8f543c7f932272f7ca374
    >
      <Form layout="vertical" name={`${item.name}`}>
        {item.inputs.map((input, key) => (
          <Form.Item
            label={`${input.name} (${input.type})`}
            name={`${input.name}`}
            required
            style={{ marginBottom: "15px" }}
            key={key}
          >
            <Input placeholder="input placeholder" />
          </Form.Item>
        ))}
        <Form.Item style={{ marginBottom: "5px" }}>
          <Text style={{ display: "block" }}>
            {responses[item.name]?.result &&
              `Response: ${JSON.stringify(responses[item.name]?.result)}`}
          </Text>
          <Button
            type="primary"
            htmlType="submit"
            loading={responses[item?.name]?.isLoading}
          >
            {item.stateMutability === "view" ? "Read🔎" : "Transact💸"}
          </Button>
        </Form.Item>
      </Form>
    </Card>
  ));
};

export default ContractMethods;
