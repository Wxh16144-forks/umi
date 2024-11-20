import { compute } from '@/worker/compute';
import { Button, Input, Space } from 'antd';
import { useState } from 'react';
const DocsPage = () => {
  const [text, setText] = useState('@Wxh16144');
  const [transformedText, setTransformedText] = useState('');
  return (
    <div>
      <p>This is umi docs.</p>
      <Space.Compact>
        <Input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            compute(text).then((res) => {
              setTransformedText(res);
            });
          }}
        >
          转换
        </Button>
      </Space.Compact>
      <p>{transformedText}</p>
    </div>
  );
};

export default DocsPage;
