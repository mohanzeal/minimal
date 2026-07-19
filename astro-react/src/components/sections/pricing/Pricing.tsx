import { useMemo, useState } from 'react';
import SectionWrapper from '@/components/common/SectionWrapper';
import SectionHeader from '@/components/common/SectionHeader';
import ItemWrapper from '@/components/common/ItemWrapper';
import {
  ContentElement,
  ButtonElement,
  Icon,
} from '@/components/common/elements';
import type { ButtonEle, ContentEle, Icon as IconType, Section } from '@/types';
import { cn } from '@/utils';

type PricingCycle = {
  id: string;
  label: ContentEle;
  amount: ContentEle;
  billingCaption: ContentEle;
};

type PricingFeature = {
  id: string | number;
  icon: IconType;
  label: ContentEle;
};

type PricingPlan = {
  id: string | number;
  className?: string;
  planTitle: ContentEle;
  planDesc: ContentEle;
  icon?: IconType;
  cycles: PricingCycle[];
  features: PricingFeature[];
  button: ButtonEle;
};

export default function Pricing3() {
  const section = {
    id: 'vjxy0',
    className: 'p-6 lg:p-8 mx-auto',
    data: {
      badge: {
        rightIcon: {
          name: 'ArrowUpRight',
        },
        href: '/pricing',
        id: '1',
        variant: 'outline',
        label: 'Popular Plan',
      },
      title: {
        content: 'Choose Your Perfect Plan',
        as: 'h1',
        className: 'lg:text-6xl!',
      },
      desc: {
        content:
          'Affordable pricing to grow your business with powerful email marketing tools.',
        isHtml: true,
      },
      buttons: [
        {
          href: '/pricing',
          id: 'ijat3',
          variant: 'default',
          label: 'See All Plans',
        },
      ],
      selectedCycle: 'monthly',
      plans: [
        {
          id: 1,
          icon: {
            name: 'DiamondPercent',
          },
          planTitle: {
            content: 'Starter',
            as: 'h3',
          },
          planDesc: {
            content:
              'Ideal for small businesses starting out with email marketing.',
            isHtml: true,
          },
          cycles: [
            {
              id: 'monthly',
              label: {
                content: 'Monthly',
              },
              amount: {
                content: '$29',
                animation: {
                  enabled: true,
                  preset: 'numberCounter',
                },
              },
              billingCaption: {
                content: 'billed monthly',
              },
            },
            {
              id: 'yearly',
              label: {
                content: 'Yearly',
                animation: {
                  enabled: true,
                  preset: 'numberCounter',
                },
              },
              amount: {
                content: '$299',
              },
              billingCaption: {
                content: 'billed yearly',
              },
            },
          ],
          features: [
            {
              id: 1,
              icon: {
                name: 'CircleCheckBig',
              },
              label: {
                content: '500 Subscribers',
              },
            },
            {
              id: 2,
              icon: {
                name: 'CircleCheckBig',
              },
              label: {
                content: 'Basic Campaigns',
              },
            },
            {
              id: 3,
              icon: {
                name: 'CircleCheckBig',
              },
              label: {
                content: '100 Emails/day',
              },
            },
            {
              id: 4,
              icon: {
                name: 'CircleCheckBig',
              },
              label: {
                content: 'Email Analytics',
              },
            },
          ],
          button: {
            href: '/signup',
            id: 'i0ku5',
            variant: 'default',
            label: 'Start Free Trial',
          },
        },
        {
          id: 2,
          icon: {
            name: 'Rocket',
          },
          planTitle: {
            content: 'Pro',
            as: 'h3',
          },
          planDesc: {
            content:
              'Advanced tools for growing businesses looking to scale their email strategy.',
            isHtml: true,
          },
          cycles: [
            {
              id: 'monthly',
              label: {
                content: 'Monthly',
              },
              amount: {
                content: '$79',
                animation: {
                  enabled: true,
                  preset: 'numberCounter',
                },
              },
              billingCaption: {
                content: 'billed monthly',
              },
            },
            {
              id: 'yearly',
              label: {
                content: 'Yearly',
              },
              amount: {
                content: '$799',
                animation: {
                  enabled: true,
                  preset: 'numberCounter',
                },
              },
              billingCaption: {
                content: 'billed yearly',
              },
            },
          ],
          features: [
            {
              id: 1,
              icon: {
                name: 'CircleCheckBig',
              },
              label: {
                content: 'Unlimited Subscribers',
              },
            },
            {
              id: 2,
              icon: {
                name: 'CircleCheckBig',
              },
              label: {
                content: 'Advanced Campaigns',
              },
            },
            {
              id: 3,
              icon: {
                name: 'CircleCheckBig',
              },
              label: {
                content: '500 Emails/day',
              },
            },
            {
              id: 4,
              icon: {
                name: 'CircleCheckBig',
              },
              label: {
                content: 'A/B Testing',
              },
            },
          ],
          button: {
            href: '/signup',
            id: 'u6lq6',
            variant: 'default',
            label: 'Upgrade Now',
          },
        },
      ],
    },
    metadata: {
      isSingleLine: false,
      alignSectionHeaderLeft: false,
      hideBadge: false,
      hideTitle: false,
      hideDesc: false,
      hideButtons: true,
      hideCycleToggle: false,
      hideFeatures: false,
      hideFeatureIcon: false,
      hidePayButtons: false,
    },
  } as Section;

  const plans = (section?.data?.plans ?? []) as PricingPlan[];

  const defaultCycle = useMemo(() => {
    const selectedCycleId = section?.data?.selectedCycle;
    const firstPlanCycles = plans?.[0]?.cycles ?? [];
    return (
      firstPlanCycles.find((c: PricingCycle) => c.id === selectedCycleId) ||
      firstPlanCycles?.[0]
    );
  }, [plans, section?.data?.selectedCycle]);

  const [selectedCycle, setSelectedCycle] = useState<PricingCycle | undefined>(
    defaultCycle
  );

  const changeCycle = (item: PricingCycle) => {
    setSelectedCycle(item);
  };

  return (
    <SectionWrapper section={section}>
      <div className="relative py-8 md:py-12">
        {/* Section Header */}
        <SectionHeader section={section} />

        {/* Billing Switcher */}
        {!section?.metadata?.hideCycleToggle &&
          plans?.[0]?.cycles?.length > 1 && (
            <div className="mt-10 flex flex-col items-center justify-center">
              <div className="relative flex items-center">
                {/* Toggle Pill Container */}
                <div className="bg-neutral text-neutral-foreground border-neutral inline-flex rounded-md border-2 p-1">
                  {plans[0].cycles.map((cycle: PricingCycle) => (
                    <button
                      key={cycle.id}
                      className={cn(
                        'cursor-pointer rounded-md px-6 py-2 text-xs font-semibold transition-all focus:outline-none',
                        cycle.id === selectedCycle?.id
                          ? 'bg-secondary text-secondary-foreground shadow-sm'
                          : ''
                      )}
                      onClick={() => changeCycle(cycle)}
                    >
                      <ContentElement {...cycle.label} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

        {/* Plans Cards Container */}
        <div className="mx-auto px-4 pt-6 sm:px-6 lg:px-8">
          <div className="relative mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
            {plans.map((plan: PricingPlan) => (
              <div key={plan.id} className="flex w-full">
                <ItemWrapper
                  item={plan}
                  contentClass="relative w-full h-full flex flex-col justify-between"
                  className={cn(
                    'relative flex h-full w-full flex-col justify-between overflow-hidden p-6 transition-all md:p-8',
                    plan.className
                  )}
                >
                  {!section?.metadata?.hideFeatureIcon && plan.icon && (
                    <div className="bg-secondary/20 current-color absolute -top-6 -right-6 overflow-hidden p-4 [clip-path:circle(64.4%_at_69%_36%)] md:-top-8 md:-right-8 lg:p-10">
                      <Icon
                        {...plan.icon}
                        className={cn(
                          'current-color size-6 shrink-0 md:size-8 lg:size-12',
                          plan.icon?.className
                        )}
                      />
                    </div>
                  )}

                  {/* Top Content of the Card */}
                  <div>
                    {/* Plan Title */}
                    <div className="mb-6 flex flex-col gap-4">
                      <ContentElement
                        {...plan.planTitle}
                        className={cn(
                          'text-2xl font-bold tracking-tight',
                          plan.planTitle.className
                        )}
                        as={plan.planTitle.as ?? 'h3'}
                      />

                      <ContentElement
                        {...plan.planDesc}
                        className={cn(
                          'max-w-[90%] opacity-80 md:max-w-[70%]',
                          plan.planDesc.className
                        )}
                      />
                    </div>

                    {/* Features Grid in 2 Columns */}
                    {!section?.metadata?.hideFeatures &&
                      plan.features &&
                      plan.features.length > 0 && (
                        <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
                          {plan.features.map((feature: PricingFeature) => (
                            <div
                              key={feature.id}
                              className="flex items-center gap-3 py-1"
                            >
                              <Icon
                                {...feature.icon}
                                className={cn(
                                  'h-4 w-4 shrink-0',
                                  feature.icon?.className
                                )}
                              />
                              <ContentElement
                                {...feature.label}
                                className={cn(
                                  'text-sm opacity-80',
                                  feature.label?.className
                                )}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                  </div>

                  {/* Bottom Content of the Card */}
                  <div className="mt-4">
                    {/* Horizontal Divider Line */}
                    <hr className="my-6 border-t-2" />

                    {/* Bottom Row: Price and Button */}
                    <div className="flex w-full flex-col items-center gap-4 lg:flex-row lg:justify-between">
                      {/* Price display */}
                      <div className="flex items-center">
                        {plan.cycles.map((cycle: PricingCycle) =>
                          cycle.id === selectedCycle?.id ? (
                            <div key={cycle.id} className="flex items-baseline">
                              <ContentElement
                                {...cycle.amount}
                                className={cn(
                                  'text-4xl font-extrabold tracking-tight sm:text-5xl',
                                  cycle.amount?.className
                                )}
                              />
                              <span className="mx-1 text-lg font-medium opacity-60">
                                /
                              </span>
                              <ContentElement
                                {...cycle.billingCaption}
                                className={cn(
                                  'text-sm opacity-80',
                                  cycle.billingCaption?.className
                                )}
                              />
                            </div>
                          ) : null
                        )}
                      </div>

                      {/* Action Button */}
                      {!section.metadata?.hidePayButtons && plan.button && (
                        <ButtonElement
                          {...plan.button}
                          className={cn(
                            'w-full lg:w-auto',
                            plan.button.className
                          )}
                        />
                      )}
                    </div>
                  </div>
                </ItemWrapper>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
