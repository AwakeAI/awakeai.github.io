import Container from "./container";
import cn from "classnames";
import {t} from "i18next";
import {useEffect, useState} from "react";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      className={cn("border-b", {
        "bg-neutral-800 border-neutral-800 text-white": preview,
        "bg-neutral-50 border-neutral-200": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{" "}
              <a
                href="/api/exit-preview"
                className="underline hover:text-teal-300 duration-200 transition-colors"
              >
                Click here
              </a>{" "}
              to exit preview mode.
            </>
          ) : (
            <>{isClient ? t("SEA") : "SEA"}</>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Alert;
