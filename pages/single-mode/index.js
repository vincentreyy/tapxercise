import Image from "next/image";
import Button from "../../components/ui/button";
import Form from "../../components/ui/form";

export default function SingleModePage() {
  return (
    <div>
      <Image src="/tapxercise.png" alt="tapxercise" width={1910} height={200} />

      <div>
        <div>
          <Form />
        </div>
        <div>
          <Button link="">
            <span>OK</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
