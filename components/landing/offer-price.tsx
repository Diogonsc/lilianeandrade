"use client";

import { useState } from "react";

import {
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { oferta } from "@/lib/content";
import { cn } from "@/lib/utils";

type Payment = "avista" | "parcelado";

export function OfferPrice() {
  const [payment, setPayment] = useState<Payment>("avista");
  const isInstallment = payment === "parcelado";

  return (
    <CardHeader className="p-7 pb-0">
      <p className="text-xs tracking-[0.2em] text-muted-foreground">DE</p>
      <p className="mt-1 text-lg text-muted-foreground line-through">
        R$ {oferta.de}
      </p>
      <p className="mt-6 text-xs tracking-[0.2em] text-muted-foreground">POR</p>

      <CardTitle className="mt-6 text-5xl font-black tracking-tight sm:text-6xl">
        {isInstallment ? (
          <>
            <span className="align-top text-xl font-bold text-muted-foreground">
              {oferta.parcelas}x{" "}
            </span>
            <span className="text-gradient">{oferta.parcela}</span>
          </>
        ) : (
          <>
            <span className="align-top text-xl font-bold text-muted-foreground">R$ </span>
            <span className="text-gradient">{oferta.aVista}</span>
          </>
        )}
      </CardTitle>
      <div
        role="radiogroup"
        aria-label="Forma de pagamento"
        className="mt-4 grid grid-cols-2 gap-2"
      >
        <PaymentOption
          checked={payment === "avista"}
          label="À vista"
          value={`R$ ${oferta.aVista}`}
          onSelect={() => setPayment("avista")}
        />
        <PaymentOption
          checked={isInstallment}
          label="Parcelado"
          value={`${oferta.parcelas}x de R$ ${oferta.parcela}`}
          onSelect={() => setPayment("parcelado")}
        />
      </div>
      <CardDescription className="mt-3">
        {isInstallment
          ? "Opção de pagamento parcelado"
          : "Pagamento à vista"}
      </CardDescription>
    </CardHeader>
  );
}

function PaymentOption({
  checked,
  label,
  value,
  onSelect,
}: {
  checked: boolean;
  label: string;
  value: string;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={checked}
      onClick={onSelect}
      className={cn(
        "rounded-2xl border px-3 py-3 text-left transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        checked
          ? "border-pink/50 bg-surface-2 text-foreground"
          : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground",
      )}
    >
      <span className="block text-[10px] font-semibold tracking-[0.16em] uppercase">
        {label}
      </span>
      <span className="mt-1 block text-sm font-bold tracking-tight">{value}</span>
    </button>
  );
}
