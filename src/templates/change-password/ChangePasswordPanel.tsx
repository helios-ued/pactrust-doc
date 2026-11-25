import { Form, FormItems } from "@/components/Form/Form";
import { FormItem } from "@/components/Form/FormItem";
import { Password } from "@/components/Input/Password";
import "./change-password.css";

const PLACEHOLDER = "大小写+数字，8-20个字符";

/** Figma A2 · Page Body `8349:6283` */
export function ChangePasswordPanel() {
  return (
    <div className="pt-module-screen__body" data-node-id="8349:6283">
      <div className="pt-module-screen__content" data-node-id="8349:6284">
        <div className="pt-change-password__intro" data-node-id="8349:6285">
          <h1 className="pt-change-password__heading" data-node-id="8349:6286">
            修改登录密码
          </h1>
        </div>
        <div className="pt-change-password__form-block" data-node-id="8349:6287">
          <Form layout="Vertical" className="pt-change-password__form">
            <FormItems className="pt-change-password__fields">
              <FormItem label="原密码" required>
                <Password placeholder={PLACEHOLDER} />
              </FormItem>
              <FormItem label="新密码" required>
                <Password placeholder={PLACEHOLDER} />
              </FormItem>
              <FormItem label="确认密码" required>
                <Password placeholder={PLACEHOLDER} />
              </FormItem>
            </FormItems>
          </Form>
        </div>
        <button type="button" className="pt-change-password__submit" data-node-id="8370:11613">
          保存
        </button>
      </div>
    </div>
  );
}
