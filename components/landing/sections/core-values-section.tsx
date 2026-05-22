import { coreValues } from "@/data/landing/values";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SplitHeading } from "@/components/ui/split-heading";
import { cn } from "@/lib/utils/cn";

export function CoreValuesSection() {
  return (
    <section className="border-t border-viepsy-hairline py-14 md:py-20">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <Eyebrow className="mb-3">Vì sao chọn Viepsy</Eyebrow>
          <SplitHeading lead="Trọng tâm" accent="của Viepsy" />
          <p className="text-body-sm mt-4 opacity-85">
            Không phán xét, không áp khuôn — chỉ lắng nghe và cùng bạn tìm hướng phù hợp.
          </p>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {coreValues.map((value, index) => {
            const isDark = index === 1 || index === 4;
            return (
              <li
                key={value.title}
                className={cn(
                  "lg:col-span-2",
                  index === 3 && "sm:col-span-2 sm:col-start-2 lg:col-start-2",
                  index === 4 && "sm:col-span-2 lg:col-start-4",
                )}
              >
                <article
                  className={cn(
                    "h-full rounded-[1.75rem] p-6 md:p-7",
                    isDark
                      ? "bg-viepsy-block-navy text-viepsy-inverse-ink"
                      : "bg-viepsy-block-mint text-viepsy-ink",
                  )}
                >
                  <span
                    className={
                      isDark
                        ? "text-eyebrow mb-3 block text-viepsy-block-lime"
                        : "text-eyebrow mb-3 block text-viepsy-accent-sage"
                    }
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-headline mb-3">{value.title}</h3>
                  <p className="text-body-sm leading-relaxed opacity-92">
                    {value.description}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
