// const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
	"testing-library/await-async-queries": ERROR,
	"testing-library/await-async-utils": ERROR,
	"testing-library/no-await-sync-events": WARN,
	"testing-library/no-await-sync-queries": WARN,
	"testing-library/no-container": WARN,
	"testing-library/no-debugging-utils": WARN,
	"testing-library/no-dom-import": [WARN, "react"],
	"testing-library/no-node-access": WARN,
	"testing-library/no-promise-in-fire-event": WARN,
	"testing-library/no-render-in-lifecycle": WARN,
	"testing-library/no-unnecessary-act": WARN,
	"testing-library/no-wait-for-multiple-assertions": WARN,
	"testing-library/no-wait-for-side-effects": WARN,
	"testing-library/no-wait-for-snapshot": WARN,
	"testing-library/prefer-find-by": WARN,
	"testing-library/prefer-presence-queries": WARN,
	"testing-library/prefer-query-by-disappearance": WARN,
	"testing-library/prefer-screen-queries": WARN,
	"testing-library/prefer-user-event": WARN,
	"testing-library/render-result-naming-convention": WARN,
};
