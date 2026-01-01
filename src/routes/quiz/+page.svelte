<script lang="ts">
  import { goto } from "$app/navigation";
  import { quizState } from "$lib/stores/quiz.svelte";
  import { encodeResults } from "$lib/utils/url-encoder";
  import QuestionCard from "$lib/components/quiz/QuestionCard.svelte";
  import Button from "$lib/components/ui/Button.svelte";
  import Modal from "$lib/components/ui/Modal.svelte";
  import type { LikertResponse } from "$lib/types";
  import { questions } from "$lib/data/questions";

  let showExitModal = $state(false);

  function handleAnswer(response: LikertResponse) {
    quizState.answer(quizState.currentQuestion.id, response);

    setTimeout(() => {
      if (quizState.isComplete) {
        const results = quizState.results;
        if (results) {
          const encoded = encodeResults(results);
          goto(`/results?r=${encoded}`);
        }
      } else {
        quizState.next();
      }
    }, 150);
  }

  function handleNext() {
    if (quizState.isComplete) {
      const results = quizState.results;
      if (results) {
        const encoded = encodeResults(results);
        goto(`/results?r=${encoded}`);
      }
    } else {
      quizState.next();
    }
  }

  function handlePrevious() {
    quizState.previous();
  }

  function handleExit() {
    if (Object.keys(quizState.answers).length > 0) {
      showExitModal = true;
    } else {
      goto("/");
    }
  }

  function confirmExit() {
    quizState.reset();
    goto("/");
  }

  function handleKeydown(event: KeyboardEvent) {
    if (showExitModal) return;

    if (event.key === "ArrowRight" && quizState.currentAnswer !== null) {
      handleNext();
    } else if (event.key === "ArrowLeft" && quizState.progress.current > 1) {
      handlePrevious();
    } else if (event.key >= "1" && event.key <= "5") {
      const response = (parseInt(event.key) - 3) as LikertResponse;
      handleAnswer(response);
    }
  }
</script>

<svelte:head>
  <title
    >Question {quizState.progress.current} of {quizState.progress.total}</title
  >
</svelte:head>

<svelte:window onkeydown={handleKeydown} />

<main class="min-h-screen flex flex-col">
  <header class="p-6">
    <div class="max-w-3xl mx-auto flex items-center justify-between">
      <button onclick={handleExit} class="text-sm font-medium hover:underline">
        Exit
      </button>
      <span class="text-sm font-medium">
        {quizState.progress.current} / {quizState.progress.total}
      </span>
    </div>
  </header>

  <div class="w-full h-1 bg-neutral-200">
    <div
      class="h-full bg-black transition-all duration-300"
      style="width: {quizState.progress.percentage}%"
    ></div>
  </div>

  <div class="flex-1 flex items-center justify-center p-6 sm:p-12">
    <div class="max-w-2xl w-full">
      {#key quizState.currentIndex}
        <QuestionCard
          question={quizState.currentQuestion}
          currentAnswer={quizState.currentAnswer}
          onAnswer={handleAnswer}
        />
      {/key}
    </div>
  </div>

  <footer class="p-6 border-t-2 border-black">
    <div class="max-w-3xl mx-auto">
      <div class="flex items-center justify-between gap-4">
        <div class="shrink-0">
          <Button
            variant="ghost"
            onclick={handlePrevious}
            disabled={quizState.progress.current === 1}
          >
            Previous
          </Button>
        </div>

        <div class="hidden sm:flex items-center gap-1 flex-1 justify-center">
          {#each questions as q, i}
            <button
              class="w-2 h-2 transition-colors
								{i === quizState.currentIndex ? 'bg-black' : ''}
								{i !== quizState.currentIndex && quizState.hasAnswer(q.id)
                ? 'bg-neutral-400'
                : ''}
								{i !== quizState.currentIndex && !quizState.hasAnswer(q.id)
                ? 'bg-neutral-200'
                : ''}"
              onclick={() => quizState.goTo(i)}
              aria-label="Go to question {i + 1}"
            ></button>
          {/each}
        </div>

        <div class="shrink-0">
          <Button
            onclick={handleNext}
            disabled={quizState.currentAnswer === null}
          >
            {quizState.currentIndex === questions.length - 1
              ? "View Results"
              : "Next"}
          </Button>
        </div>
      </div>
    </div>
  </footer>
</main>

<Modal
  open={showExitModal}
  title="Exit Assessment"
  onconfirm={confirmExit}
  oncancel={() => (showExitModal = false)}
  confirmText="Exit"
  cancelText="Continue"
>
  <p class="text-neutral-600">
    Your progress will be lost. Are you sure you want to exit?
  </p>
</Modal>
