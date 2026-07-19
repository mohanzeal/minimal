<script lang="ts" setup>
import { cn } from '@/utils';
import { ref } from 'vue';
import {
  ContentElement,
  ButtonElement,
  Icon,
} from '@/components/common/elements';
import SectionWrapper from '@/components/common/SectionWrapper.vue';
import SectionHeader from '@/components/common/SectionHeader.vue';
import type { Section } from '@/types/section.types';
import ItemWrapper from '@/components/common/ItemWrapper.vue';

const section = ref({
  id: 'Pricing3_a2xht',
  class: 'p-6 lg:p-8 mx-auto',
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
      as: 'h2',
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
} as Section);

const plans = section.value.data.plans;
const selectedCycle = ref(
  plans?.[0]?.cycles?.find(
    (c: any) => c.id === section.value.data.selectedCycle
  ) || plans?.[0]?.cycles?.[0]
);
const changeCycle = (item: any) => {
  selectedCycle.value = item;
};
</script>
<template>
  <SectionWrapper :section="section">
    <div class="relative py-8 md:py-12">
      <!-- Section Header -->
      <SectionHeader :section="section" />
      <!-- Billing Switcher -->
      <div
        v-if="
          !section.metadata?.hideCycleToggle &&
          section.data.plans?.[0]?.cycles?.length > 1
        "
        class="mt-10 flex flex-col items-center justify-center"
      >
        <div class="relative flex items-center">
          <!-- Toggle Pill Container -->
          <div
            class="bg-neutral text-neutral-foreground border-neutral inline-flex rounded-md border-2 p-1"
          >
            <button
              v-for="cycle in section.data.plans?.[0]?.cycles"
              :key="cycle.id"
              :class="[
                cycle.id === selectedCycle?.id
                  ? 'bg-secondary text-secondary-foreground shadow-sm'
                  : '',
                'cursor-pointer rounded-md px-6 py-2 text-xs font-semibold transition-all focus:outline-none',
              ]"
              @click="changeCycle(cycle)"
            >
              <ContentElement v-bind="cycle.label" />
            </button>
          </div>
        </div>
      </div>
      <!-- Plans Cards Container -->
      <div class="mx-auto px-4 pt-6 sm:px-6 lg:px-8">
        <div
          class="relative mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch"
        >
          <div
            v-for="(plan, planIdx) in section.data.plans"
            :key="plan.id"
            class="flex w-full"
          >
            <ItemWrapper
              :item="plan"
              content-class="relative w-full h-full flex flex-col justify-between"
              :class="
                cn(
                  'relative flex h-full w-full flex-col justify-between overflow-hidden p-6 transition-all md:p-8',
                  plan.class
                )
              "
            >
              <div
                v-if="!section.metadata?.hideFeatureIcon"
                class="bg-secondary/20 current-color absolute -top-6 -right-6 overflow-hidden p-4 [clip-path:circle(64.4%_at_69%_36%)] md:-top-8 md:-right-8 lg:p-10"
              >
                <Icon
                  v-bind="plan.icon"
                  :class="
                    cn(
                      'current-color size-6 shrink-0 md:size-8 lg:size-12',
                      plan.icon?.class
                    )
                  "
                />
              </div>
              <!-- Top Content of the Card -->
              <div>
                <!-- Plan Title -->
                <div class="mb-6 flex flex-col gap-4">
                  <ContentElement
                    v-bind="plan.planTitle"
                    :as="plan.planTitle.as ?? 'h3'"
                    :class="
                      cn(
                        'text-2xl font-bold tracking-tight',
                        plan.planTitle?.class
                      )
                    "
                  />
                  <ContentElement
                    v-bind="plan.planDesc"
                    :class="
                      cn(
                        'max-w-[90%] opacity-80 md:max-w-[70%]',
                        plan.planDesc?.class
                      )
                    "
                  />
                </div>
                <!-- Features Grid in 2 Columns -->
                <div
                  class="grid grid-cols-1 gap-4 text-left sm:grid-cols-2"
                  v-if="
                    !section.metadata?.hideFeatures && plan.features.length > 0
                  "
                >
                  <div
                    v-for="feature in plan.features"
                    :key="feature.id"
                    class="flex items-center gap-3 py-1"
                  >
                    <Icon
                      v-bind="feature.icon"
                      :class="cn('h-4 w-4 shrink-0', feature.icon?.class)"
                    />
                    <ContentElement
                      v-bind="feature.label"
                      :test-label="`${plan.id} + ${feature.id}`"
                      :class="cn('text-sm opacity-80', feature.label?.class)"
                    />
                  </div>
                </div>
              </div>
              <!-- Bottom Content of the Card (Pushed below) -->
              <div class="mt-4">
                <!-- Horizontal Divider Line -->
                <hr class="my-6 border-t-2" />
                <!-- Bottom Row: Price and Button -->
                <div
                  class="flex w-full flex-col items-center gap-4 lg:flex-row lg:justify-between"
                >
                  <!-- Price display -->
                  <div class="flex items-center">
                    <template v-for="cycle in plan.cycles" :key="cycle.id">
                      <div
                        v-if="cycle.id === selectedCycle?.id"
                        class="flex items-baseline"
                      >
                        <ContentElement
                          v-bind="cycle.amount"
                          :class="
                            cn(
                              'text-4xl font-extrabold tracking-tight sm:text-5xl',
                              cycle.amount?.class
                            )
                          "
                        />
                        <span class="mx-1 text-lg font-medium opacity-60"
                          >/</span
                        >
                        <ContentElement
                          v-bind="cycle.billingCaption"
                          :class="
                            cn(
                              'text-sm opacity-80',
                              cycle.billingCaption?.class
                            )
                          "
                        />
                      </div>
                    </template>
                  </div>
                  <!-- Action Button -->
                  <ButtonElement
                    v-if="!section.metadata?.hidePayButtons"
                    v-bind="plan.button"
                    :class="cn('w-full lg:w-auto', plan.button?.class)"
                  />
                </div>
              </div>
            </ItemWrapper>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>
